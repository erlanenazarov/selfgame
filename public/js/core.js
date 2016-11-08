/**
 * Created by erlan on 11/7/16.
 */

var person_questions = {
    10: {
        'question': 'Кто основатель Microsoft?',
        'answer': 'Билл Гейтс и Пол Аллен'
    },
    20: {
        'question': 'Стив Джобс был программистом?',
        'answer': 'Нет'
    },
    30: {
        'question': 'в феврале 2011 года в Египте родилась девочка по имени Facebook. Это правда?',
        'answer': 'Да! Видимо, её родители любили соц. сети))'
    },
    40: {
        'question': 'Более 80% изображений в сети – голые женщины. Правда или вымысел?',
        'answer': 'Правда! А вы и не против...'
    },
    50: {
        'question': 'Когда началась история вычислительной техники?',
        'answer': '3000 лет до н. э. Именно за 3000 лет до н.э. в Древнем Вавилоне были изобретены первые счёты — абак.'
    }
};

var os_questions = {
    10: {
        'question': 'Какая версия Windows вышла после 8.1',
        'answer': '10. Видимо, у людей в Microsoft после 8 идёт 10'
    },
    20: {
        'question': 'К какой компании пренадлежит Android Corporation',
        'answer': 'Google'
    },
    30: {
        'question': 'На продукты каких компаний, помимо Apple, устанавливается операционная система iOS?',
        'answer': 'IOS ставится только на продуктах Apple'
    },
    40: {
        'question': 'С какого города автор логотипа Android? (Ирина Блок)',
        'answer': 'Из Ленинграда'
    },
    50: {
        'question': 'Эта ОС была создана финским программистом.',
        'answer': 'OS Linux'
    }
};

var phone_questions = {
    10: {
        'question': '<img src="public/images/questions/content_iphone_3gs.jpg" style="width: 450px;" />',
        'answer': 'iPhone 3Gs'
    },
    20: {
        'question': '<img src="public/images/questions/phone_nokia_310.jpg" style="width: 150px;" />',
        'answer': 'Nokia 3250'
    },
    30: {
        'question': '<img src="public/images/questions/nokian95.jpg" style="width: 450px;" />',
        'answer': 'Nokia N95'
    },
    40: {
        'question': '<img src="public/images/questions/nokia3310.jpg" style="width: 450px;" />',
        'answer': 'Nokia 3310'
    },
    50: {
        'question': '<img src="public/images/questions/samsungs3.jpg" style="width: 450px;" />',
        'answer': 'Samsung Galaxy S3'
    }
};

var other_questions = {
    10: {
        'question': 'Сколько видов одежды у Билла Гейтса?',
        'answer': '1 вид одежды'
    },
    20: {
        'question': 'Каким названием нельзя назвать папку в ОС Windows?',
        'answer': '"Con". Билла Гейтса обзывали так в детстве'
    },
    30: {
        'question': 'Почему дизайн Facebook выполнен в синей гамме?',
        'answer': 'Потому что, Марк страдает дальтонизмом, плохо различая оттенки красного и зеленого цветов'
    },
    40: {
        'question': 'Сколько завпросов Google обрабатывает каждый день?',
        'answer': 'Около миллиона'
    },
    50: {
        'question': 'Сколько лет знаку @',
        'answer': '500 лет'
    }
};

var logical_questions = {
    10: {
        'question': 'Придумайте алгоритм для того, чтобы пожарить яичницу',
        'answer': '1 - Включить плиту;<br /> 2 - Поставить сковороду;<br /> 3 - Налить масло;<br /> 4 - Разбить яйца;<br /> 5 - Насыпать соль;<br /> 6 - Готово'
    },
    20: {
        'question': 'Как запихать слона в  холодильник?',
        'answer': '1 - Открыть холодильник;<br /> 2 - Засунуть в него слона;<br /> 3 - Закрыть холодильник;'
    },
    30: {
        'question': 'Найдите отличие:<br /> <img src="public/images/questions/difference.png" style="width: 450px;" />',
        'answer': 'Слово "отличие" написано внизу'
    },
    40: {
        'question': 'Муравей ползёт по столбу вверх, высота столба 20 метров. Днём он поднимается на 2 метра, а ночью спускается на 1 метр. За сколько дней он доберётся до вершины?',
        'answer': 'За 19 дней'
    },
    50: {
        'question': 'Кто сказал выражение "Тут дело не в сервисе?"',
        'answer': 'Я'
    }
};

var team_panel_button = $('#team-panel');
var panel = $('#team-panel-show');

var modal = $('.modal');
var modal_content = $('.modal-content');

var answer_block = $('#answer');

var sender = null;


function ShowTeamPanel() {
    $(panel).css('display', 'block');
    $(panel).animate({
        top: -1
    }, 500);
}

function HidePanel() {
    $(panel).animate({
        top: -1613
    }, 500, function() {
        $(panel).css('display', 'none');
    });
}

function showModal(data) {
    sender = $(data);
    var question_owner = null;
    var question_owner_data = '';

    switch ($(sender).attr('data-array')) {
        case 'person_questions':
            question_owner = person_questions;
            question_owner_data = 'История IT';
            break;
        case 'os_questions':
            question_owner = os_questions;
            question_owner_data = 'Операционные системы';
            break;
        case 'phone_questions':
            question_owner = phone_questions;
            question_owner_data = 'Мобильные телефоны';
            break;
        case 'other_questions':
            question_owner = other_questions;
            question_owner_data = 'Разные факты';
            break;
        case 'logical_questions':
            question_owner = logical_questions;
            question_owner_data = 'Логика';
            break;
    }

    var ticket = question_owner[parseInt($(sender).attr('data-point'))].question;
    var ticket_answer = question_owner[parseInt($(sender).attr('data-point'))].answer;

    $('#question-owner').html('"' + question_owner_data + '"' + ' <span>'+ $(sender).attr('data-point') +'</span>');
    $('#question').html(ticket);
    $(answer_block).html(ticket_answer);

    HidePanel();
    $(modal).fadeIn('slow');
    $(modal_content).animate({
        top: '50%'
    }, 500);
}

function hideModal() {
    $(modal_content).animate({
        top: -1000
    }, 500);
    $(modal).fadeOut('slow');
    if($(answer_block).hasClass('show')) {
        $(answer_block).removeClass('show');
    }
}

$(document).ready(function() {
    $('.panel-dismiss').on('click', function() {
        HidePanel();
    });

    $('.md-trigger').on('click', function(event) {
        event.preventDefault();
        if(!$(this).hasClass('done')) {
            showModal($(this));
        }
    });

    $('#close-modal').on('click', function(event) {
        event.preventDefault();
        hideModal();
    });

    $('#show-answer').on('click', function(e) {
        e.preventDefault();
        if(!$(answer_block).hasClass('show')) {
            $(answer_block).addClass('show');
        }
    });

    $('.accept-answer').on('click', function(e) {
        e.preventDefault();
        hideModal();
        $(sender).addClass('done');
    });
});
