/* globals $, Infotrack, getQueryStringParam, _wq */

$(document).ready(function () {
    try {
        var contentSlug = getQueryStringParam('c');
        var scrollDepthElements = [];

        if (typeof Infotrack === "undefined") {
            if (typeof window.top.Infotrack !== "undefined") {
                var Infotrack = window.top.Infotrack;
            } else {
                var Infotrack = {
                    track: function () {
                    }
                };
            }
        }

        scrollDepthElements.push('#offers', '#submit-button');

        $.scrollDepth({
            elements: scrollDepthElements,
            percentage: true,
            pixelDepth: false,
            userTiming: false,
            eventHandler: function (data) {
                Infotrack.track('Scrolled (' + data['eventAction'] + ')', {
                    category: 'Pages',
                    label: data['eventLabel'],
                    order_page_content_slug: contentSlug
                });
            }
        });

        $('[data-event-track]').on("click", function () {
            Infotrack.track('Clicked', {
                category: 'Elements',
                label: $(this).data('event-track'),
                order_page_content_slug: contentSlug
            });
        });

        if (typeof(riveted) !== "undefined") {
            riveted.init({
                reportInterval: 60,
                nonInteraction: true
            });
        }

        // http://wistia.com/doc/player-api
        window._wq = window._wq || [];
        _wq.push({
            '_all': function (video) {
                video.bind('play', function () {
                    Infotrack.track('Played', {
                        category: 'Videos',
                        label: video.name(),
                        order_page_content_slug: contentSlug
                    });
                });
                video.bind('pause', function () {
                    Infotrack.track('Paused', {
                        category: 'Videos',
                        label: video.name(),
                        order_page_content_slug: contentSlug,
                        value: video.time()
                    });
                });
                video.bind('end', function () {
                    Infotrack.track('Ended', {
                        category: 'Videos',
                        label: video.name(),
                        order_page_content_slug: contentSlug
                    });
                });
            }
        });

        $('div.modal').on('shown.bs.modal', function (e) {
            Infotrack.track('Shown', {
                category: 'Modals',
                label: e.target.id,
                order_page_content_slug: contentSlug
            });
        });
        $('div.modal').on('hidden.bs.modal', function (e) {
            Infotrack.track('Hidden ', {
                category: 'Modals',
                label: e.target.id,
                order_page_content_slug: contentSlug
            });
        });

        $('div.offer').on("click", function () {
            Infotrack.track('Clicked', {
                category: 'Elements',
                label: $(this).data('term') + ' year offer',
                order_page_content_slug: contentSlug
            });
        });
    } catch (e) {
        if (typeof(Raven) !== "undefined" && typeof(Raven.captureException) !== "undefined") {
            Raven.captureException(e)
        }
    }
}); // $(document).ready()
