<?php
/**
 * Set up
 */

$libDIR = dirname(__FILE__) . '/lib/';

require_once $libDIR . '_vite.lib.php';
require_once $libDIR . '_setup.php';

/**
 * Hooks
 */

$hooksDIR = dirname(__FILE__) . '/hooks/';

require_once $hooksDIR . '_acf-hooks.php';

/**
 * Elementor add on
 */

$eleDIR = dirname(__FILE__) . '/elementor-addon/';

require_once $eleDIR . '/elementor-addon.php';