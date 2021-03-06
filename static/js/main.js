(function() {
  "use strict";

  // iPad and iPod detection
  var isiPad = function() {
    return navigator.platform.indexOf("iPad") != -1;
  };

  var isiPhone = function() {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    );
  };

  // Parallax
  var parallax = function() {
    $(window).stellar();
  };

  // Burger Menu
  var burgerMenu = function() {
    $("body").on("click", ".js-fh5co-nav-toggle", function(event) {
      event.preventDefault();

      if ($("#navbar").is(":visible")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  };

  var testimonialCarousel = function() {
    var owl = $(".owl-carousel-fullwidth");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut"
    });
  };

  // Handle user clicks on Hero buttons
  var clickHeroButtons = function() {
    $(".hero-buttons").click(function(event) {
      var section = $(this).data("hero-section");
      $("a[data-nav-section='" + section + "']").click();
    });
    $(".pricing").click(function(event) {
      var section = $(this).data("pricing-section");
      $("a[data-nav-section='" + section + "']").click();
    });
  };

  // Page Nav
  var clickMenu = function() {
    $('#navbar a:not([class="external"])').click(function(event) {
      var section = $(this).data("nav-section"),
        navbar = $("#navbar");

      if ($('[data-section="' + section + '"]').length) {
        $("html, body").animate(
          {
            scrollTop: $('[data-section="' + section + '"]').offset().top - 55
          },
          500
        );
      }

      if (navbar.is(":visible")) {
        navbar.removeClass("in");
        navbar.attr("aria-expanded", "false");
        $(".js-fh5co-nav-toggle").removeClass("active");
      }

      event.preventDefault();
      return false;
    });
  };

  // Reflect scrolling in navigation
  var navActive = function(section) {
    var $el = $("#navbar > ul");
    $el.find("li").removeClass("active");
    $el.each(function() {
      $(this)
        .find('a[data-nav-section="' + section + '"]')
        .closest("li")
        .addClass("active");
    });
  };

  var navigationSection = function() {
    var $section = $("section[data-section]");

    $section.waypoint(
      function(direction) {
        if (direction === "down") {
          navActive($(this.element).data("section"));
        }
      },
      {
        offset: "150px"
      }
    );

    $section.waypoint(
      function(direction) {
        if (direction === "up") {
          navActive($(this.element).data("section"));
        }
      },
      {
        offset: function() {
          return -$(this.element).height() + 155;
        }
      }
    );
  };

  // Window Scroll
  var windowScroll = function() {
    var lastScrollTop = 0;

    $(window).scroll(function(event) {
      var header = $("#fh5co-header"),
        scrlTop = $(this).scrollTop();

      if (scrlTop > 500 && scrlTop <= 2000) {
        header.addClass("navbar-fixed-top fh5co-animated slideInDown");
      } else if (scrlTop <= 500) {
        if (header.hasClass("navbar-fixed-top")) {
          header.addClass("navbar-fixed-top fh5co-animated slideOutUp");
          setTimeout(function() {
            header.removeClass(
              "navbar-fixed-top fh5co-animated slideInDown slideOutUp"
            );
          }, 100);
        }
      }
    });
  };

  // Animations
  // Home
  var homeAnimate = function() {
    if ($("#fh5co-home").length > 0) {
      $("#fh5co-home").waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(function() {
              $("#fh5co-home .to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var exploreAnimate = function() {
    var explore = $("#fh5co-explore");
    if (explore.length > 0) {
      explore.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(function() {
              explore.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            setTimeout(function() {
              explore.find(".to-animate-2").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("bounceIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 700);

            setTimeout(function() {
              explore.find(".to-animate-3").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInRight animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 1000);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var testimonyAnimate = function() {
    var testimony = $("#fh5co-testimony");
    if (testimony.length > 0) {
      testimony.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(function() {
              testimony.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var gettingStartedAnimate = function() {
    var started = $(".getting-started-1");
    if (started.length > 0) {
      started.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(function() {
              started.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            setTimeout(function() {
              started.find(".to-animate-2").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInRight animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var gettingStarted2Animate = function() {
    var started = $(".getting-started-2");
    if (started.length > 0) {
      started.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(function() {
              started.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            setTimeout(function() {
              started.find(".to-animate-2").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInRight animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var pricingAnimate = function() {
    var pricing = $("#fh5co-pricing");
    if (pricing.length > 0) {
      pricing.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(function() {
              pricing.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            setTimeout(function() {
              pricing.find(".to-animate-2").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var servicesAnimate = function() {
    var services = $("#fh5co-services");
    if (services.length > 0) {
      services.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            var sec = services.find(".to-animate").length,
              sec = parseInt(sec * 200 + 400);

            setTimeout(function() {
              services.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            setTimeout(function() {
              services.find(".to-animate-2").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("bounceIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, sec);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var teamAnimate = function() {
    var team = $("#fh5co-team");
    if (team.length > 0) {
      team.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            var sec = team.find(".to-animate").length,
              sec = parseInt(sec * 200 + 400);

            setTimeout(function() {
              team.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            setTimeout(function() {
              team.find(".to-animate-2").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, sec);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var faqAnimate = function() {
    var faq = $("#fh5co-faq");
    if (faq.length > 0) {
      faq.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            var sec = faq.find(".to-animate").length,
              sec = parseInt(sec * 200 + 400);

            setTimeout(function() {
              faq.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            setTimeout(function() {
              faq.find(".to-animate-2").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, sec);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var processAnimate = function() {
    var faq = $("#fh5co-process");
    if (faq.length > 0) {
      faq.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            var sec = faq.find(".to-animate").length,
              sec = parseInt(sec * 200 + 400);

            setTimeout(function() {
              faq.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            setTimeout(function() {
              faq.find(".to-animate-2").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeInUp animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, sec);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var trustedAnimate = function() {
    var trusted = $("#fh5co-trusted");
    if (trusted.length > 0) {
      trusted.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            var sec = trusted.find(".to-animate").length,
              sec = parseInt(sec * 200 + 400);

            setTimeout(function() {
              trusted.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            setTimeout(function() {
              trusted.find(".to-animate-2").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("bounceIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, sec);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var footerAnimate = function() {
    var footer = $("#fh5co-footer");
    if (footer.length > 0) {
      footer.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(function() {
              footer.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var blogAnimate = function() {
    var footer = $("#fh5co-blog");
    if (footer.length > 0) {
      footer.waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(function() {
              footer.find(".to-animate").each(function(k) {
                var el = $(this);

                setTimeout(
                  function() {
                    el.addClass("fadeIn animated");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 200);

            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" }
      );
    }
  };

  var counter = function() {
    $(".js-counter").countTo({
      formatter: function(value, options) {
        return value.toFixed(options.decimals);
      }
    });
  };

  var counterWayPoint = function() {
    if ($("#fh5co-counter-section").length > 0) {
      $("#fh5co-counter-section").waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 1000);
            $(this.element).addClass("animated");
          }
        }
        // { offset: "90%" }
      );
    }
  };

  var contactForm = function() {
    var form = $(".query-form");

    form.submit(function(e) {
      var valid = true,
        message = "";

      e.preventDefault();

      $("form input").each(function() {
        var $self = $(this);
        if (!$self.val()) {
          //var inputName = $self.attr("name");
          valid = false;
          message =
            "Please make sure to enter Name, Email Id, Language or Framework details about your work and submit your query.";
          return false;
        }
      });
      if (!valid) {
        $("#contact-message")
          .html(
            '<div class="alert alert-error" style="background-color: rgba(250, 85, 85, 0.8);color:white;" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
              message +
              "</div>"
          )
          .fadeIn();
        return;
      }

      var $this = $(this);

      $.post(
        $(this).attr("action"),
        $this.serialize(),
        function() {
          $this[0].reset(); // clear form

          $("#contact-message")
            .html(
              '<div class="alert alert-success" style="background-color: rgba(250, 85, 85, 0.8);color:white;" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>Thank you for your query. We will get back to you soon!</div>'
            )
            .fadeIn();
        },
        "json"
      )
        .done(function() {})
        .fail(function() {})
        .always(function() {
          $this[0].reset(); // clear form

          $("#contact-message")
            .html(
              '<div class="alert alert-success" style="background-color: rgba(250, 85, 85, 0.8);color:white;" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>Thank you for your query. We will get back to you soon!</div>'
            )
            .fadeIn();
        });
      return false;
    });
  };

  var incrementVisitorCount = function() {
    var $this = $(this);
    var jqxhr = $.ajax({
      url:
        "https://script.google.com/macros/s/AKfycbwh5_hApfdqdkME4ihbbzcT2MbBExQrDWbaJTS7QgGdzp_prWPv/exec",
      method: "GET",
      dataType: "json",
      data: ""
    }).done(function(res) {
      if (res && res.count) {
        var visitCounter = $(".js-counter");
        visitCounter.attr("data-to", res.count);
        counter();
      }
    });
  };

  // Document on load.
  $(function() {
    parallax();
    burgerMenu();
    clickMenu();
    clickHeroButtons();
    windowScroll();
    navigationSection();
    testimonialCarousel();
    incrementVisitorCount();
    // Animations
    homeAnimate();
    exploreAnimate();
    testimonyAnimate();
    gettingStartedAnimate();
    gettingStarted2Animate();
    pricingAnimate();
    servicesAnimate();
    teamAnimate();
    faqAnimate();
    processAnimate();
    trustedAnimate();
    footerAnimate();
    blogAnimate();
    counterWayPoint();
    contactForm();
  });
})();
