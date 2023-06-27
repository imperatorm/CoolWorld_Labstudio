import { module } from 'modujs'
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.js'
import { clamp, map } from '../utils/maths'
import BezierEasing from 'bezier-easing'

const FPS = 30
const SPEED_FACTOR = 1
const BREAKPOINT = 999

export default class extends module {
    constructor(m) {
        super(m)

        // UI
        this.$el = this.el
        this.$inner = this.$('inner')[0]
        this.$videoContainer = this.$('container')[0]
        this.$keyframes =  this.$('keyframe')
        this.$videoEl = null

        // Binding
        this.onVideoCanPlayBind = this.onVideoCanPlay.bind(this)
        this.onResizeEndBind = this.onResizeEnd.bind(this)

        // Data
        this.videoSrc = this.getData('src')
        this.videoDuration = 0

        // Easing
        this.easing = BezierEasing(0.165, 0.840, 0.440, 1.000)
        
        // CSS vars
        this.varGridMargin = 0
        this.varBorderRadius = 0

        // Global progress
        this.progress = 0

        // Progress ranges & values for each element
        this.stickyMask = {
            start: 0,
            end: 1,
            progress: 0,
            easedProgress: 0,
            value: 0
        }

        this.imageMask = {
            start: 0,
            end: 1,
            progress: 0,
            value: 0,
            roundBorders: {
                start: .8,
                end: 1,
                progress: 0,
                value: 0
            }
        }

        this.videoMask = {
            start: 0,
            end: 1,
            progress: 0,
            value: 0
        }

        this.video = {
            start: 0,
            end: 1,
            progress: 0,
            currentTime: 0,
            oldCurrentTime: 0
        }

        // Keyframes data
        this.keyframesData = []
    }

    ///////////////
    // Lifecyle
    ///////////////
    init() {
        // Events
        this.bindEvents()

        // Get Data
        this.getCssVars()
        this.getKeyramesData()

        // Init scroll video
        if (!window.isTouchDevice && !window.isMobile && window.innerWidth > BREAKPOINT) {
            this.initScrollVideo()
        }
    }

    destroy() {
        super.destroy()
        this.unbindEvents()
    }

    ///////////////
    // Events
    ///////////////
    bindEvents() {
        window.addEventListener('resizeEnd', this.onResizeEndBind)
    }

    unbindEvents() {
        window.removeEventListener('resizeEnd', this.onResizeEndBind)
    }

    ///////////////
    // Callbacks
    ///////////////
    onResizeEnd() {
        this.getCssVars()

        // Init scroll video
        if (!window.isTouchDevice && !window.isMobile && window.innerWidth > BREAKPOINT) {
            if (!this.scrollVideo) {
                this.initScrollVideo()
            } else {
                // Set module height relative on video duration
                this.setModuleHeight()

                // Wait next frame to set progress ranges
                requestAnimationFrame(() => {
                    this.setProgressRanges()
                })
            }
        } else {
            if (this.scrollVideo) {
                this.scrollVideo = null
                this.resetComputedStyles()
            }
        }
    }

    onVideoCanPlay() {
        // Get video duration
        this.videoDuration = this.$videoEl.duration

        // Set module height relative on video duration
        this.setModuleHeight()

        // Wait next frame to set progress ranges
        requestAnimationFrame(() => {
            this.setProgressRanges()
        })
    }

    onScrollProgress(progress) {
        if (!window.isTouchDevice && !window.isMobile && window.innerWidth > BREAKPOINT) {
            this.progress = progress
            this.computeProgress()
        }
    }

    ///////////////
    // Methods
    ///////////////
    initScrollVideo() {
        this.scrollVideo = new ScrollyVideo({
            src: this.videoSrc,
            scrollyVideoContainer: this.$videoContainer,
            sticky: false,
            trackScroll: false
        })

        requestAnimationFrame(() => {
            this.$videoEl = this.$videoContainer.querySelector('video')
            this.$videoEl?.addEventListener('canplay', this.onVideoCanPlayBind)
        })
    }

    getCssVars() {
        const styles = getComputedStyle(document.documentElement)
        
        // Get raw css var value and remove ' '
        this.varGridMargin = styles.getPropertyValue('--grid-margin').trim()
        this.varBorderRadius = styles.getPropertyValue('--border-radius').trim()
        
        // Remove 'px' and convert it as int type
        this.varGridMargin = Number(this.varGridMargin.slice(0, -2))
        this.varBorderRadius = Number(this.varBorderRadius.slice(0, -3))
    }

    getKeyramesData() {
        let index = 0
        while (index < this.$keyframes.length) {
            const $keyframe = this.$keyframes[index]

            const time = this.getData('time', $keyframe).split(',')
            const timeStart = time[0] != undefined ? time[0].trim() : '0'
            const timeEnd = time[1] != undefined ? time[1].trim() : '0'

            this.keyframesData[index] = [
                timeStart,
                timeEnd
            ]
            index++
        }
    }

    setProgressRanges() {
        const windowHeight = window.innerHeight
        const moduleHeight = this.$el.getBoundingClientRect().height + windowHeight

        // Cascading progress ranges
        this.imageMask.end    = windowHeight / moduleHeight
        this.videoMask.start  = this.imageMask.end
        this.videoMask.end    = this.videoMask.start + (windowHeight / moduleHeight)
        this.video.start      = this.videoMask.end
        this.video.end        = 1 - (windowHeight / moduleHeight)
        this.stickyMask.start = this.video.end
        this.stickyMask.end   = 1 - .25 * (windowHeight / moduleHeight)
    }

    setModuleHeight() {
        const videoHeight = this.videoDuration * FPS * SPEED_FACTOR
        this.$el.style.setProperty('--video-height', `${videoHeight}vh`)
    }

    computeProgress() {
        // =========================================================
        // Mask image progress
        // =========================================================
        this.imageMask.progress = clamp(
            0,
            1,
            map(this.progress, this.imageMask.start, this.imageMask.end, 0, 1)
        )

        this.imageMask.roundBorders.progress = clamp(
            0,
            1,
            map(this.imageMask.progress, this.imageMask.roundBorders.start, this.imageMask.roundBorders.end, 0, 1)
        )

        // Calc percent value
        this.imageMask.value = 10 * (1 - this.imageMask.progress) 
        this.imageMask.roundBorders.value = 20 * (1 - this.imageMask.roundBorders.progress) 
        this.$el.style.clipPath = `inset(0 ${this.imageMask.value}% 0 ${this.imageMask.value}% round ${this.imageMask.roundBorders.value}px)`

        // =========================================================
        // Video image progress
        // =========================================================
        this.videoMask.progress = clamp(
            0,
            1,
            map(this.progress, this.videoMask.start, this.videoMask.end, 0, 1)
        )
        
        this.videoMask.value = 100 * (1 - this.videoMask.progress) 
        this.$videoContainer.style.clipPath = `inset(${this.videoMask.value}% 0 0 0)`

        // =========================================================
        // Mask sticky container (end)
        // =========================================================
        this.stickyMask.progress = clamp(
            0,
            1,
            map(this.progress, this.stickyMask.start, this.stickyMask.end, 0, 1)
        )

        // Ease out progress
        this.stickyMask.easedProgress = this.easing(this.stickyMask.progress)
        this.$inner.style.clipPath = `inset(0 ${this.stickyMask.easedProgress * this.varGridMargin}px round ${this.stickyMask.easedProgress * this.varBorderRadius}rem)`

        // =========================================================
        // Video progress
        // =========================================================
        this.video.progress = clamp(
            0,
            1,
            map(this.progress, this.video.start, this.video.end, 0, 1)
        )
        this.scrollVideo?.setTargetTimePercent?.(this.video.progress)

        // Video current time
        this.video.currentTime = Math.round(this.video.progress * this.videoDuration)

        if (this.video.currentTime != this.video.oldCurrentTime) {
            this.setActiveKeyframe()
            this.video.oldCurrentTime = this.video.currentTime
        }
    }

    resetComputedStyles() {
        this.$el.style.clipPath = 'inset(0)'
        this.$videoContainer.style.clipPath = 'inset(0)'
        this.$inner.style.clipPath = 'inset(0)'
    }

    setActiveKeyframe() {
        let index = 0
        while (index < this.keyframesData.length) {
            const timeStart = this.keyframesData[index][0]
            const timeEnd = this.keyframesData[index][1]

            if (this.video.currentTime >= timeStart && this.video.currentTime < timeEnd) {
                this.$keyframes[index].classList.add('is-active')
            } else {
                this.$keyframes[index].classList.remove('is-active')
            }
            index++
        }
    }
}
