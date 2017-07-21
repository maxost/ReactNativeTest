
export function fetchData(page) {
    // const url = `https://192.168.0.235:8080/payments27/api/orgs/list?page=${page}&pageSize=0`;
    // console.log(`!!!!!!!!!!!!!!!!!! ${url}`);
    // return fetch(url)
    //     .then(res => {
    //         console.log(res);
    //         res.json();
    //     })

    return new Promise(resolve => setTimeout(_ => resolve(JSON.parse(json(page))), 5000))
}

function json(page) {
    return `{
    "meta": {
        "status": "SUCCESS",
        "description": null
    },
    "response": {
        "page": 0,
        "pageSize": 20,
        "totalPages": 5,
        "totalSize": 320,
        "items": [
            {
                "id": "${page}c60491ce-166f-4360-889d-cd25c830924a",
                "shortName": "${page} КГБУ \\"ЭЛЬБАНСКИЙ ПНИ\\"",
                "address": {
                    "locationCode": "08603160",
                    "locationData": "КРАЙ ХАБАРОВСКИЙ, РАЙОН АМУРСКИЙ, РАБОЧИЙ ПОСЕЛОК ЭЛЬБАН",
                    "customAddress": "УЛИЦА ОБЪЕЗДНАЯ, 1"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_medicine.png"
                }
            },
            {
                "id": "${page}508f429c-fa63-4d15-a6bf-8a8f2c249c44",
                "shortName": "${page} ООО \\"ОЛФЗ\\"++",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровск, Хабаровский край",
                    "customAddress": "Московская, 122"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_transfer.png"
                }
            },
            {
                "id": "${page}52e4fcd4-ce18-4eb9-b253-53cc60c110a4",
                "shortName": "${page} МБУК Дом культуры «Отрада»",
                "address": {
                    "locationCode": "08617438",
                    "locationData": "Вяземский район, с. Отрадное",
                    "customAddress": "ул. Шоссейна, д.16"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_culture.png"
                }
            },
            {
                "id": "${page}3c75fe64-762c-4fb4-a50d-6ccf18a11318",
                "shortName": "${page} Филиал КГБУЗ \\"ККВД в г. Комсомольске-на-амуре\\"",
                "address": {
                    "locationCode": "",
                    "locationData": "г. Комсомольск-на-Амуре",
                    "customAddress": " ул. Красноармейская,  6/2"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_medicine.png"
                }
            },
            {
                "id": "${page}24981e9f-0b5e-4840-ac3f-c23b6bee6962",
                "shortName": "${page} МБДОУ ДЕТСКИЙ САД  С.ШЕРЕМЕТЬЕВО",
                "address": {
                    "locationCode": "08617440",
                    "locationData": "Вяземский район, с. Шереметьево",
                    "customAddress": "ул. Школьная, дом 6а"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_education.png"
                }
            },
            {
                "id": "${page}1c2fb699-61f7-4cd4-a71a-0a1b964192ed",
                "shortName": "${page} МБУК «Дом культуры «Гармония»",
                "address": {
                    "locationCode": " 08666617440",
                    "locationData": "Вяземский район, с. Шереметьево  ",
                    "customAddress": " ул. Центральная 14 А"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_culture.png"
                }
            },
            {
                "id": "${page}541eac42-7934-44eb-988c-112e510dd7b4",
                "shortName": "${page} КГБУЗ \\"Советско-Гаванская РБ\\"",
                "address": {
                    "locationCode": "08642101",
                    "locationData": "Советско-Гаванский муниципальный район, г. Советская Гавань",
                    "customAddress": "улица Ленина, 8"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_medicine.png"
                }
            },
            {
                "id": "${page}c6c1cfe4-0e31-4dd9-b324-5dedf74a9bbb",
                "shortName": "${page} КГБУЗ «ЦПБСИЗ» МЗ ХК",
                "address": {
                    "locationCode": "08701000",
                    "locationData": " г.Хабаровск",
                    "customAddress": "  пер. Пилотов, 2"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_medicine.png"
                }
            },
            {
                "id": "${page}3e51291d-ff98-4072-bc78-3ff44d77f58b",
                "shortName": "${page} КГБУЗ \\"Перинатальный центр\\" ",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край,Хабаровск г",
                    "customAddress": "Истомина ул,85"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_medicine.png"
                }
            },
            {
                "id": "${page}e56cc4ee-a180-4491-8b42-23e409110676",
                "shortName": "${page} ООО \\"Сказка\\"",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "г. Хабаровск",
                    "customAddress": "ул. Карла Маркса, 76"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_sport.png"
                }
            },
            {
                "id": "${page}2ae08479-a020-47f7-bda8-a5675592b612",
                "shortName": "${page} КГБУЗ \\"Городская больница № 2\\"",
                "address": {
                    "locationCode": "08709000",
                    "locationData": "г. Комсомольск-на-Амуре",
                    "customAddress": "ул. Культурная, д.5"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_medicine.png"
                }
            },
            {
                "id": "${page}dc47c5b7-b1d8-47a7-9dea-7485094b4492",
                "shortName": "${page} МУП \\"Организация №3\\"",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край, г. Хабаровск",
                    "customAddress": "ул. Серышева, 47"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_medicine.png"
                }
            },
            {
                "id": "${page}e92f206e-58be-4502-80e7-9aa657d50c32",
                "shortName": "${page} Золотое время",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край, г. Хабаровск",
                    "customAddress": "ул. Запарина, 137"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_medicine.png"
                }
            },
            {
                "id": "${page}d0d6192e-1829-4818-bae7-f629d03f06a9",
                "shortName": "${page} МУП \\"Организация\\"",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край, г. Хабаровск",
                    "customAddress": "ул. Серышева, 47"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_rest.png"
                }
            },
            {
                "id": "${page}a4dd69af-aaf3-44cc-a573-c41efff9a8b9",
                "shortName": "${page} ООО \\"ААА\\"",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край, г. Хабаровск",
                    "customAddress": "ул. Серышева, 47"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_culture.png"
                }
            },
            {
                "id": "${page}b139de70-34bd-49fa-be25-b68f99e313e6",
                "shortName": "${page} МУП \\"Водоканал\\"",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край, г. Хабаровск",
                    "customAddress": "ул. Серышева, 47"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_education.png"
                }
            },
            {
                "id": "${page}535f5639-bef4-4a58-9990-8ef94e800a61",
                "shortName": "${page} МУП \\"Веселый праздник\\"",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край, г. Хабаровск",
                    "customAddress": "ул. Серышева, 47"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_sport.png"
                }
            },
            {
                "id": "${page}8855be35-f69b-487f-8a27-bf612fee046d",
                "shortName": "${page} МУП \\"Автодор\\"",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край, г. Хабаровск",
                    "customAddress": "ул. Серышева, 47"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_rest.png"
                }
            },
            {
                "id": "${page}8f34f338-3584-4722-88e3-e8801e915a74",
                "shortName": "${page} МУП \\"Организация №1\\"",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край, г. Хабаровск",
                    "customAddress": "ул. Серышева, 47"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_rest.png"
                }
            },
            {
                "id": "${page}3a97d6ea-23ca-46dc-bd31-11862b94fa7d",
                "shortName": "${page} МУП \\"Организация №2\\"",
                "address": {
                    "locationCode": "08701000",
                    "locationData": "Хабаровский край, г. Хабаровск",
                    "customAddress": "ул. Серышева, 47"
                },
                "resource": {
                    "prefix": "orgs/logos",
                    "suffix": "placeholder_education.png"
                }
            }
        ]
    }
}`
}