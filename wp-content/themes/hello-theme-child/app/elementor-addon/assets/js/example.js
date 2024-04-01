/**
 * ===========================================================================
 *  Custom widget handler class
 *  @widget Animating Content Slider
 * ===========================================================================
 */

class ContentSliderHandler extends elementorModules.frontend.handlers.Base {
    /**
     * Specifying the jQuery selectors of the HTML elements
     *
     * Runs when the widget is loaded
     */
    getDefaultSettings() {
      return {
        selectors: {
          exampleTarget: ".example",
        },
      };
    }
  
    /**
     * On Element Change
     *
     * Runs every time a control value is changed by the user in the editor.
     *
     * @param {string} propertyName - The ID of the control that was changed.
     */
  
    onElementChange(propertyName) {
      // custom code here
    }
  
    /**
     * On Init
     *
     * Runs when the widget is loaded and initialized in the frontend.
     */
    onInit() {
      this.selectors = this.getSettings("selectors");
      // slider initialization
      this.initializations();
      this.setupEventListeners();
    }
  
    /**
     * Initializations
     */
    initializations() {
      console.log('Initialized');
    }
  
    /**
     * Event Listeners
     */
    setupEventListeners() {
      // toggle play pause slider
      this.$element
        .find(this.selectors.playPause)
        .on("click", (event) => this.togglePlayPause(event));
  
      // jump to specific slides
      this.$element.find(this.selectors.jumpTo).on("click", (event) => {
        event.preventDefault();
  
        const ind = jQuery(event.currentTarget).data("number");
  
        this.textSwiper.slideToLoop(ind, 1000);
      });
  
      // toggle dropdown
  
      this.$element.find(this.selectors.select).on("click", (event) => {
        jQuery(event.currentTarget).find(".dropdown").slideToggle("slow");
      });
    }
  
    /**
     * Start animation
     */
    startAnimation() {
      const $progressHtml = this.$element.find(this.selectors.progressBar);
  
      this.timeline.to($progressHtml, {
        duration: this.progressDuration,
        delay: 0.5,
        value: 100,
        ease: Power1.out,
      });
    }
  
    /**
     * Reverse animation
     * @trigger start backward animation with different speed
     */
    reverseAnimation() {
      this.timeline.reverse();
  
      this.timeline.duration(this.reverseDuration);
  
      this.textSwiper.slideNext();
    }
  
    /**
     * Re-start animation
     * @trigger restart's progress animation from start
     */
    restartAnimation() {
      this.timeline.play();
  
      this.timeline.duration(this.progressDuration);
    }
  
    /**
     * Toggle play/pause animation
     * @param {*} event
     */
    togglePlayPause(event) {
      event.preventDefault();
  
      this.timeline.paused(!this.timeline.paused());
    }
  
    /**
     * Set width of custom .custom_select same as H1 tag
     */
    setWidthSelect() {
      // Get the active slide element
      const activeSlide = this.textSwiper.slides[this.textSwiper.activeIndex],
        spaceElement = this.$element.find(this.selectors.space);
  
      // Get the width of the h1 of active slide
      const width = activeSlide.querySelector("h1").offsetWidth;
  
      // Get the height of the h1 of active slide
      const height = activeSlide.querySelector("h1").offsetHeight;
  
      spaceElement.css("transition", `width ${this.reverseDuration}s ease`);
  
      spaceElement.width(width);
      spaceElement.height(height);
    }
  }
  
  /**
   * =========================================================================
   * Register JS Handler for the Widget
   *
   * When Elementor frontend was initiated, and the widget is ready, register
   * the widget JS handler.
   * =========================================================================
   */
  
  window.addEventListener("elementor/frontend/init", () => {
    const addHandler = ($element) => {
      elementorFrontend.elementsHandler.addHandler(ContentSliderHandler, {
        $element,
      });
    };
  
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/content-slider.default",
      addHandler
    );
  });
  