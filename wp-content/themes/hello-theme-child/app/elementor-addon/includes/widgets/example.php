<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Elementor List Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */

class Example extends \Elementor\Widget_Base
{

    /**
     * Get widget name.
     *
     * Retrieve list widget name.
     *
     * @since 1.0.0
     * @access public
     * @return string Widget name.
     */
    public function get_name()
    {
        return 'example';
    }

    /**
     * Get widget title.
     *
     * Retrieve list widget title.
     *
     * @since 1.0.0
     * @access public
     * @return string Widget title.
     */
    public function get_title()
    {
        return esc_html__('Example Title', 'elementor-list-widget');
    }


    /**
     * Get widget title.
     *
     * @since 1.0.0
     * @access public
     * @return array Widget title.
     */
    public function get_style_depends()
    {
        return ['example-style'];
    }

    /**
     * Script Dependencies
     *
     * @since 1.0.0
     * @access public
     * @return array Widget title.
     */
    public function get_script_depends()
    {
        return ['example-script'];
    }

    /**
     * Get widget icon.
     *
     * Retrieve list widget icon.
     *
     * @since 1.0.0
     * @access public
     * @return string Widget icon.
     */
    public function get_icon()
    {
        return 'eicon-bullet-list';
    }

    /**
     * Get widget categories.
     *
     * Retrieve the list of categories the list widget belongs to.
     *
     * @since 1.0.0
     * @access public
     * @return array Widget categories.
     */
    public function get_categories()
    {
        return ['example'];
    }

    /**
     * Get widget keywords.
     *
     * Retrieve the list of keywords the list widget belongs to.
     *
     * @since 1.0.0
     * @access public
     * @return array Widget keywords.
     */
    public function get_keywords()
    {
        return ['keyword'];
    }

    /**
     * Register list widget controls.
     *
     * Add input fields to allow the user to customize the widget settings.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {

        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'HelloElementorChild'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );


        $this->add_control(
            'example_field',
            [
                'label' => esc_html__('Example Field', 'HelloElementorChild'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'min' => 2,
                'max' => 10,
                'step' => 1,
                'default' => 5,
                'frontend_available' => true,
            ]
        );

        $this->end_controls_section();

    }

    /**
     * Render list widget output on the frontend.
     *
     * Written in PHP and used to generate the final HTML.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function render()
    {
        $settings = $this->get_settings_for_display();

        $exampleField = $settings['example_field'] ?? 'No Data';
        ?>
        <div class="example">
            <?php echo $exampleField; ?>
        </div>
        <?php
    }

    /**
     * Instant change reflected in editor
     *
     * Written in PHP and used to generate the final HTML.
     *
     * @since 1.0.0
     * @access protected
     */

    protected function content_template()
    {
        ?>
        <div class="example">{{{ settings.example_field }}}</div>
        <?php
    }

}