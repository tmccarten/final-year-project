<?php

$pageTitle = "Contact Us| Liverpool, Pembroke & Sefton Harriers & Athletics Club";
$pageDescription = "Contact form for Liverpool, Pembroke & Sefton Harriers & Athletics Club.";
$pageAuthor = "Thomas McCarten";
$activePage = "Contact Us";

include ($_SERVER['DOCUMENT_ROOT'].'/assets/includes/head.php');
include ($_SERVER['DOCUMENT_ROOT'].'/assets/includes/header.php');
?>

  <main>

    <section class="contentblock hero">

      <div class="hero-image small">
        <h2>Contact Us</h2>
      </div>

    </section>

    <div class="breadbin">
      <div class="site-wrapper">
          <div class="titlestrip breadcrumb">
            <a href="/index.php">Home</a><p>Contact Us</p>
          </div>
      </div>
    </div>

    <section class="contentblock">
      <div class="site-wrapper">
        <div class="flex-wrapper">
          <div class="content">
            <h3>Contact Us</h3>
            <p><strong>We would love to hear from you!</strong></p>
            <form class="contactform">

            <label for="name">Name:</label>
              <input type="text" name="name">
            <label for="email">Email:</label>
              <input type="email" name="email" placeholder="your@email.com">
            <label for="message">Message:</label>
                <textarea name="message"></textarea>
                  <button type="submit">Send</button>
          </form>
        </div>

        <?php include ($_SERVER['DOCUMENT_ROOT'].'/assets/includes/sidebar.php'); ?>

        </div>
      </div>
    </section>

    <?php include ($_SERVER['DOCUMENT_ROOT'].'/assets/includes/footer.php'); ?>

  </main>

</body>

<script src="/assets/js/script.js"></script>

</html>
