 // load I18N bundles
            $(document).ready(function () {
                loadBundles($.i18n.browserLang());

                // configure language combo box
                $('#sidebar').change(function () {
                    var selection = $('#sidebar option:selected').val();
                    loadBundles(selection !== 'browser' ? selection : $.i18n.browserLang());

                });
            });

            function loadBundles(lang) {
                $.i18n.properties({
                    name: 'Messages',
                    path: 'bundle/',
                    mode: 'both',
                    language: lang,
                    callback: function () {
                        //$("#msg_welcome").text($.i18n.prop('msg_welcome'));
                        $(".msg_title_banner_1").text(msg_title_banner_1);
                        $(".msg_subtitle_banner_1").text(msg_subtitle_banner_1);
                        $(".msg_title_banner_2").text(msg_title_banner_2);
                        $(".msg_subtitle_banner_2").text(msg_subtitle_banner_2);
                        $(".msg_title_banner_3").text(msg_title_banner_3);
                        $(".msg_subtitle_banner_3").text(msg_subtitle_banner_3);
                        $(".msg_btn_banner_1").text(msg_btn_banner_1);
                        $(".msg_btn_banner_2").text(msg_btn_banner_2);
                        $(".msg_overview_nav").text(msg_overview);
                        $(".msg_products_nav").text(msg_products);
                        $(".msg_plans_nav").text(msg_plans);
                        $(".msg_find_nav").text(msg_find);
                        $(".msg_buy_nav").text(msg_buy);
                        $(".msg_title_benefits").text(msg_title_benefits);
                        $(".msg_subtitle_benefits").text(msg_subtitle_benefits);
                        $(".msg_title_col_benefits_1").text(msg_title_col_benefits_1);
                        $(".msg_title_col_benefits_2").text(msg_title_col_benefits_2);
                        $(".msg_title_col_benefits_3").text(msg_title_col_benefits_3);
                        $(".msg_content_col_benefits_1").text(msg_content_col_benefits_1);
                        $(".msg_content_col_benefits_2").text(msg_content_col_benefits_2);
                        $(".msg_content_col_benefits_3").text(msg_content_col_benefits_3);

                    }
                });
            }