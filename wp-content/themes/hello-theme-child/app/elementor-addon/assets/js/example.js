/**
 * ===========================================================================
 *  Custom widget handler class
 *  @widget Animating Content Slider
 * ===========================================================================
 */

class ExampleHandler extends elementorModules.frontend.handlers.Base {
  /**
   * Specifying the jQuery selectors of the HTML elements
   *
   * Runs when the widget is loaded
   */
  getDefaultSettings() {
    return {
      selectors: {
        exampleTarget: '.example',
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
    this.selectors = this.getSettings('selectors');

    console.log('Example Widget Init');

    // event listener
    this.setupEventListeners();
  }

  /**
   * Event Listeners
   */
  setupEventListeners() {
    this.$element.find(this.selectors.exampleTarget).on('click', (event) => {
      event.preventDefault();

      console.log('Click Event Handling');
    });
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

window.addEventListener('elementor/frontend/init', () => {
  const addHandler = ($element) => {
    elementorFrontend.elementsHandler.addHandler(ExampleHandler, {
      $element,
    });
  };

  elementorFrontend.hooks.addAction('frontend/element_ready/example.default', addHandler);
});
