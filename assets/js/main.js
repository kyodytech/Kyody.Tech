/*
	Typify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {
  skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)"
  });

  $(function() {
    var $window = $(window),
      $body = $("body");

    // Disable animations/transitions until the page has loaded.
    $body.addClass("is-loading");

    $window.on("load", function() {
      window.setTimeout(function() {
        $body.removeClass("is-loading");
      }, 100);
    });

    // Fix: Placeholder polyfill.
    $("form").placeholder();

    // Prioritize "important" elements on medium.
    skel.on("+medium -medium", function() {
      $.prioritize(
        ".important\\28 medium\\29",
        skel.breakpoint("medium").active
      );
    });

    $("#contact-form").submit(function(e) {
      e.preventDefault();

      const url = $(this).attr("action");
      const status = $("#contact-form-status");

      const data = {
        userKey: $("#contact-form-userkey")[0].value,
        body: {
          name: $("#contact-form-name")[0].value,
          from: $("#contact-form-email")[0].value,
          message: $("#contact-form-message")[0].value
        }
      };

      $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(res) {
          status.html("Thanks for reaching out, I'll be in touch soon!");
        },
        error: function(err) {
          status.html(
            `Something went wrong with sending your message, please try again or contact me by <a class="btn btn-social btn-lg btn-adn" href=" mailto:info@kylemarciano.com?subject=Interested%20in%20more%20information%20"><i class="fa fa-envelope" aria-hidden="true"></i>info@kylemarciano.com</a>`
          );
        }
      });
    });
  });
})(jQuery);
