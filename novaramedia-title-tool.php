<?php
/**
 * Plugin Name: Novara Media Title Tool
 * Plugin URI:
 * Description: Enfore AP style titles in editor
 * Version: 0.1.0
 * License: GPL2
*/

class Novara_Media_Title_Tool {
  public function __construct() {
/*     register_activation_hook( __FILE__, array( $this, 'after_activation' ) ); */
    add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
  }

/*
  public function after_activation() {

  }
*/

  /**
   * Load JS scripts
   * Only on post.php and post-new.php
   */

  public function enqueue_scripts( $hook ){
    if( 'post.php' != $hook && 'post-new.php' != $hook ) {
      return;
    }

    wp_register_script( 'novara-podcast-post-clone-script', plugins_url( '/novaramedia-title-tool.js', __FILE__ ), array( 'jquery' ) );

    // Enqueue script
    wp_enqueue_script( 'novara-podcast-post-clone-script' );
  }

}

$novaramediatitletool = new Novara_Media_Title_Tool();