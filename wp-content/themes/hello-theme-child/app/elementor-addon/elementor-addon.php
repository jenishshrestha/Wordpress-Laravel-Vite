<?php

/**
 * Custom elementor extension
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

include_once (ABSPATH . 'wp-admin/includes/plugin.php');

/**
 * Register Widgets.
 *
 * Include widget file and register widget class.
 *
 * @since 1.0.0
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 * @return void
 */

function register_custom_widgets($widgets_manager)
{
    $widgetFolder = '/includes/widgets';

    // includes widget files
    require_once (__DIR__ . $widgetFolder . '/example.php');

    //register class of widget
    $widgets_manager->register(new \Example());

}

/**
 * Register Custom Category for widgets.
 *
 * @since 1.0.0
 * @return void
 */
function register_custom_categories($elements_manager)
{
    $elements_manager->add_category(
        'example',
        [
            'title' => __('Example', 'young-innovation'),
        ]
    );
}

function elementor_scripts()
{
    /**
     * =======================================
     * Elemenetor widgets
     * =======================================
     */

    $scssDir = 'app/elementor-addon/assets/scss/';
    $jsDir = 'app/elementor-addon/assets/js/';

    //Example widget
    wp_register_style('example-style', Vite::asset($scssDir . 'example.scss'), [], null, 'screen');

    wp_register_script('example-script', Vite::asset($jsDir . 'example.js'), ['elementor-frontend'], null, false);

}


if (is_plugin_active('elementor/elementor.php')) {

    add_action('elementor/widgets/register', 'register_custom_widgets');

    add_action('elementor/elements/categories_registered', 'register_custom_categories');

    add_action('elementor/frontend/before_enqueue_scripts', 'elementor_scripts');

}