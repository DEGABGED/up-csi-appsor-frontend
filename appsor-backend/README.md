# README

## How to interface with the API

When using camel case JSON keys, include this key-value pair in the headers:
```
X-Key-Inflection: camel
```

## Applicant Form API

```
{
    "basicInfo": {
        "firstName": "Francis",
        "middleInitial": "Q",
        "lastName": "dela Cruz",
        "nickname": "Francis",
        "studentNumber": "2015-08086",
        "birthday": "Aug 24, 1998",
        "contactNumber": "(+63) 908 894 3422",
        "email": "francis@zac.dlc",
        "address": "No u"
    },
    "skillsInterests": {
        "skills": "None",
        "interests": "Nothing",
        "experience": "no"
    },
    "affiliations": [
        {
            "orgName": "CSI",
            "position": "No",
            "duties": "None"
        }
    ],
    "committees": [
        {
            "priority": 1,
            "committee_id": 1,
            "reason": "asdf"
        }
    ]
}
```
