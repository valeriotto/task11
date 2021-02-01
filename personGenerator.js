const personGenerator = {
    lastNameJson: `{
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFeMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александра",
            "id_2": "Юлия",
            "id_3": "Клава",
            "id_4": "Анна",
            "id_5": "Дарья",
            "id_6": "Наталья",
            "id_7": "Мирона",
            "id_8": "Валерия",
            "id_9": "Ксения",
            "id_10": "Татьяна"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михаилович",
            "id_8": "Даниловчи",
            "id_9": "Егореьвич",
            "id_10": "Андреевич"
        }
    }`,
    middleNameFeMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александровна",
            "id_2": "Маскимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитовна",
            "id_7": "Махайловна",
            "id_8": "Даниловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "программист",
            "id_2": "официант",
            "id_3": "директор",
            "id_4": "стриптизер",
            "id_5": "коллектор",
            "id_6": "дальнобойщик",
            "id_7": "охранник",
            "id_8": "омоновец",
            "id_9": "снайпер",
            "id_10": "грузчик"
        }
    }`,
    professionFeMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "медсестра",
            "id_2": "официантка",
            "id_3": "уборщица",
            "id_4": "репетитор",
            "id_5": "безработная",
            "id_6": "спортсменка",
            "id_7": "домохозяйка",
            "id_8": "сиделка",
            "id_9": "кондуктор",
            "id_10": "офицерша"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    /*метод randomIntNumber - случайная генерация, в котором стрелочная функция которая генерирует случайные целые числа*/
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        let obj = JSON.parse(json); // преобразование строк JSON в обьект JS
        let prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    //мужское имя
    randomFirstNameMale: function () {
        return this.randomValue(this.firstNameMaleJson);
    },
    //женское имя
    randomFirstNameFeMale: function () {
        return this.randomValue(this.firstNameFeMaleJson);
    },

    //мужское отчество
    randomMiddleNameMale: function () {
        return this.randomValue(this.middleNameMaleJson);
    },
    //женское отчество
    randomMiddleNameFeMale: function () {
        return this.randomValue(this.middleNameFeMaleJson);
    },

    //фамилии
    randomLastName: function () {
        return this.randomValue(this.lastNameJson);
    },

    //мужская профессия
    randomProfessionMale: function () {
        return this.randomValue(this.professionMaleJson);
    },
    //женская профессия
    randomProfessionFeMale: function () {
        return this.randomValue(this.professionFeMaleJson);
    },

    //месяц рождения
    randomMonth: function () {
        return this.randomValue(this.monthJson);
    },

    //сначала выбираем пол
    randomGender: function () {
        let male = this.randomIntNumber(1, 0);
        male == 1 ? this.male = this.GENDER_MALE : this.male = this.GENDER_FEMALE;
        return this.male;
    },

    //после пола выбираем имя, отчество и добавляем к фамилии "а"
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.lastName = this.randomLastName();
        if (this.person.gender == this.GENDER_FEMALE) {
            this.person.lastName += 'a';
            this.person.firstName = this.randomFirstNameFeMale();
            this.person.profession = this.randomProfessionFeMale();
            this.person.middleName = this.randomMiddleNameFeMale();
        }
        else {
            this.person.firstName = this.randomFirstNameMale();
            this.person.profession = this.randomProfessionMale();
            this.person.middleName = this.randomMiddleNameMale();
        }

        // формируем дату рождения, в зависимости от месяца выбираем число и добавляем год
        let date = '';
        let month = '';
        month = this.randomMonth();
        if ((month == "апреля") || (month == "июня") || (month == "сентября") || (month == "ноября")) {
            date = Math.floor(Math.random() * (30 - 1 + 1) + 1);
        }
        if (month == "февраля") {
            date = Math.floor(Math.random() * (29 - 1 + 1) + 1);
        } else {
            date = Math.floor(Math.random() * (31 - 1 + 1) + 1);
        }
        this.person.year = Math.floor(Math.random() * (2020 - 1950 + 1) + 1950);
        date = String(date) + ' ' + String(month) + ' ' + String(Math.floor(Math.random() * (2020 - 1950 + 1) + 1950));
        this.person.year = date;
        return this.person;
    }
}
