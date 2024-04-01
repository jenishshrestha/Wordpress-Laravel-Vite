<?php

/**
 * ================================================
 * Specify custom folder for acf json sync
 * ================================================
 */
function acf_json_save_point($path)
{
    return get_stylesheet_directory() . '/acf-json';
}

add_filter('acf/settings/save_json', 'acf_json_save_point');

/**
 * ================================================
 * Save CPT/tax json in specific folder
 * ================================================
 */
function acf_cpt_save_folder($path)
{
    return get_stylesheet_directory() . '/acf-json/post-types';
}

add_filter('acf/settings/save_json/type=acf-post-type', 'acf_cpt_save_folder');

function acf_tax_save_folder($path)
{
    return get_stylesheet_directory() . '/acf-json/taxonomies';
}
add_filter('acf/settings/save_json/type=acf-taxonomy', 'acf_tax_save_folder');


/**
 * ================================================
 * Local Sync - Load json file on theme load.
 * ================================================
 */

add_filter('acf/settings/load_json', 'my_acf_json_load_point');

function my_acf_json_load_point($paths)
{

    unset($paths[0]);

    $paths[] = get_stylesheet_directory() . '/acf-json';
    $paths[] = get_stylesheet_directory() . '/acf-json/post-types';
    $paths[] = get_stylesheet_directory() . '/acf-json/taxonomies';

    return $paths;
}

/**
 * ================================================
 * Enable/Disable acf extended modules
 * ================================================
 */

add_action('acf/init', 'my_acfe_modules');
function my_acfe_modules()
{
    // disable block type module
    acf_update_setting('acfe/modules/block_types', false);

    // disable forms module
    acf_update_setting('acfe/modules/forms', false);

    // disable options module
    acf_update_setting('acfe/modules/options', false);

    // disable post type module
    acf_update_setting('acfe/modules/post_types', false);

    // disable taxonomies module
    acf_update_setting('acfe/modules/taxonomies', false);

    // disable options pages module
    acf_update_setting('acfe/modules/options_pages', false);
}