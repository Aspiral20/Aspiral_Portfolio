$(document).ready(() => {
    let item = '.item';

    for (let i = 0; i < $(item).length; i++) {
        $($('#header-menu ' + item)[i]).on('click', () => {
            for (let j = 0; j < $(item).length; j++) {
                $($(item + ' .hereCircle')[j]).removeClass('circle');
            }
            $($(item + ' .hereCircle')[i]).addClass('circle');
        });
    }

    let mainAboutMe = '#AboutMe';
    let changeLanguageSVG = '#changeLanguage-svg';
    let photoContact = '#photo-contact';

    let headerDescriptionBottomBar = $('#headerBar');
    let changeLanguageBottomBar = $('#changeBar');
    let photoContactBottomBar = $('#photoBar');

    let bottomBar = $('.bottomBar');

    let massiveBottomBar = [
        headerDescriptionBottomBar,
        changeLanguageBottomBar,
        photoContactBottomBar,
    ];
    let massiveBottomBarBlock = [
        mainAboutMe,
        changeLanguageSVG,
        photoContact,
    ];

    function checkBottomBar(currentId) {
        for (let i = 0; i < massiveBottomBar.length; i++) {
            if (currentId === massiveBottomBar[i]) {

                if (currentId.hasClass('hide')) {
                    currentId.removeClass('hide');
                } else {
                    currentId.addClass('hide');
                }

            } else if (currentId !== massiveBottomBar[i]) {
                massiveBottomBar[i].addClass('hide');
            }
        }
    }

    for (let i = 0; i < massiveBottomBarBlock.length; i++) {
        $($(massiveBottomBarBlock[i])).on('click', (event) => {
            checkBottomBar(massiveBottomBar[i]);
        });
    }

    $('#Home, #main, #header-logo, #header-contact #contactMe, #footer').click(() => {
        bottomBar.addClass('hide');
    });

    $('#main, #header-logo, #header-contact, #footer').click(() => {
        $('#header-menu .item .hereCircle').removeClass('circle');
    });

    let bottomBarItem = $('.bottomBar-item');
    bottomBarItem.on('click', () => {
        changeLanguageBottomBar.addClass('hide');
    });

});