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
            <a href="#">
              <h4>Big turn out of youngsters at Sefton Park</h4>
              <p>November 28, 2016</p>
              <img src="assets/img/news/u15.jpg" height="244" width="487">
            </a>
          </div>

          <div class="item">
            <a href="#">
              <h4>Dan shows the way</h4>
              <p>October 31, 2016</p>
              <img src="assets/img/news/LPS-men-Arrowe-Park-2016.jpg" height="244" width="487">
            </a>
          </div>

          <div class="item">
            <a href="#">
              <h4>Opening match of the cross country season</h4>
              <p>October 5, 2016</p>
              <img src="assets/img/news/astley-park.jpg" height="244" width="487">
            </a>
          </div>

          <div class="item">
            <a href="#">
              <h4>Senior women find a silver lining</h4>
              <p>September 12, 2016</p>
              <img src="assets/img/news/Sahgal-Longley-Gawthorne.jpg" height="244" width="487">
            </a>
          </div>

        </section>
      </div>
    </section>

    <section class="contentblock">
      <div class="site-wrapper">

        <div class="titlestrip">
          <h3>Upcoming fixtures</h3> <p><a href="#">View all fixtures</a></p>
        </div>


        <section class="fixtures-inner">
          <table>
            <tr><th>Date</th><th>Venue</th><th>Event</th></tr>

            <tr>
              <td>Sat, 11th Feb.</td>
              <td>Rossall School, Cleveleys</td>
              <td>Mid-lancs Cross Country League Race 5</td>
            </tr>
            <tr>
              <td>Sat, 4th Mar.</td>
              <td>Leigh Sports Village</td>
              <td>Mid-lancs Cross Country League Race 6</td>
            </tr>
            <tr>
              <td>Sat, 11th Mar.</td>
              <td>Prestwold Hall, Loughbrough</td>
              <td>Inter Counties Championships</td>
            </tr>
          </table>
        </section>



      </div>
    </section>

    <?php include ($_SERVER['DOCUMENT_ROOT'].'/assets/includes/footer.php'); ?>

  </main>

</body>

<script src="/assets/js/script.js"></script>

</html>
