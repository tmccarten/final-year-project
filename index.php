<?php

$pageTitle = "Home | Liverpool, Pembroke & Sefton Harriers & Athletics Club";
$pageDescription = "Official website of Liverpool, Pembroke & Sefton Harriers & Athletics Club. Includes news, about the club and how to become a member.";
$pageAuthor = "Thomas McCarten";
$activePage = "Home";

include ($_SERVER['DOCUMENT_ROOT'].'/assets/includes/head.php');
include ($_SERVER['DOCUMENT_ROOT'].'/assets/includes/header.php');
?>

  <main>

    <section class="contentblock hero">

      <div class="hero-image">

      </div>

      <div class="hero-content site-wrapper">

        <div class="banner-logo-container">
            <h2 class="logo banner">Liverpool, Pembroke
                  <span> & Sefton</span>
                  <span class="strapline">Harriers & Athletics Club</span>
            </h2>
        </div>

        <div class="banner-tagline-container">
            <h3 class="tagline">A quality club in a quality setting.</h3>
            <p class="tagline strapline">Competing with distinction in all types of activity: leagues, county, regional and national championships.</p>
        </div>

        <div class="banner-buttons-container">
            <a href="#" class="button">About the club</a>
            <a href="#" class="button member">Membership</a>
        </div>
      </div>

    </section>

    <section class="contentblock latestnews">
      <div class="site-wrapper">

        <div class="titlestrip">
          <h3>Latest News</h3> <p><a href="#">View all news</a></p>
        </div>

        <section class="latestnews-inner">

          <div class="item">
            <h4>Dan shows the way</h4>
            <p>October 31, 2016</p>
            <img src="/assets/img/home/image5.jpg" height="253" width="487">
          </div>

          <div class="item">
            <h4>Opening match of the cross country season</h4>
            <p>October 5, 2016</p>
            <img src="/assets/img/home/image5.jpg" height="253" width="487">
          </div>

          <div class="item">
            <h4>Clare claims gold and silver at British masters</h4>
            <p>September 20, 2016</p>
            <img src="/assets/img/home/image5.jpg" height="253" width="487">
          </div>

          <div class="item">
            <h4>Senior women find a silver lining</h4>
            <p>September 12, 2016</p>
            <img src="/assets/img/home/image5.jpg" height="253" width="487">
          </div>
        </section>
      </div>
    </section>

    <?php include ($_SERVER['DOCUMENT_ROOT'].'/assets/includes/footer.php'); ?>

  </main>

</body>

<script src="/assets/js/script.js"></script>

</html>
