import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {
  public getData(): Observable<any> {
    return of([
      {
        "featureGroupCaption": "კავშირის ინტერფეისი",
        "features": [
          {
            "featureCaption": "პორტები",
            "featureValues": [
              {
                "featureValue": "Lightning",
                "productId": 32586,
                "featureGroupCaption": "კავშირის ინტერფეისი",
                "featureCaption": "პორტები"
              },
              {
                "featureValue": "USB Type-C 2.0",
                "productId": 234935,
                "featureGroupCaption": "კავშირის ინტერფეისი",
                "featureCaption": "პორტები"
              },
              {
                "featureValue": "USB Type-C 2.0",
                "productId": 234934,
                "featureGroupCaption": "კავშირის ინტერფეისი",
                "featureCaption": "პორტები"
              },
              {
                "featureValue": "USB Type-C 3.2",
                "productId": 234931,
                "featureGroupCaption": "კავშირის ინტერფეისი",
                "featureCaption": "პორტები"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "მთავარი კამერა",
        "features": [
          {
            "featureCaption": "ვიდეო",
            "featureValues": [
              {
                "featureValue": "gyro-EIS",
                "productId": 32586,
                "featureGroupCaption": "მთავარი კამერა",
                "featureCaption": "ვიდეო"
              },
              {
                "featureValue": "4K@30fps",
                "productId": 234935,
                "featureGroupCaption": "მთავარი კამერა",
                "featureCaption": "ვიდეო"
              },
              {
                "featureValue": "4K@30fps",
                "productId": 234934,
                "featureGroupCaption": "მთავარი კამერა",
                "featureCaption": "ვიდეო"
              },
              {
                "featureValue": "4K@30/60fps",
                "productId": 234931,
                "featureGroupCaption": "მთავარი კამერა",
                "featureCaption": "ვიდეო"
              }
            ]
          },
          {
            "featureCaption": "კამერა",
            "featureValues": [
              {
                "featureValue": "12 MP, f/1.5, 26mm",
                "productId": 32586,
                "featureGroupCaption": "მთავარი კამერა",
                "featureCaption": "კამერა"
              },
              {
                "featureValue": "12 MP, f/1.8, 24mm",
                "productId": 234935,
                "featureGroupCaption": "მთავარი კამერა",
                "featureCaption": "კამერა"
              },
              {
                "featureValue": "12 MP, f/1.8, 24mm",
                "productId": 234934,
                "featureGroupCaption": "მთავარი კამერა",
                "featureCaption": "კამერა"
              },
              {
                "featureValue": "12 MP, f/2.2, 123˚, 12mm",
                "productId": 234931,
                "featureGroupCaption": "მთავარი კამერა",
                "featureCaption": "კამერა"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "Gaming კლავიატურა",
        "features": [
          {
            "featureCaption": "sad",
            "featureValues": [
              {
                "featureValue": "შეიძლება",
                "productId": 32586,
                "featureGroupCaption": "Gaming კლავიატურა",
                "featureCaption": "sad"
              },
              {
                "featureValue": "კი",
                "productId": 234935,
                "featureGroupCaption": "Gaming კლავიატურა",
                "featureCaption": "sad"
              },
              {
                "featureValue": "შეიძლება",
                "productId": 234934,
                "featureGroupCaption": "Gaming კლავიატურა",
                "featureCaption": "sad"
              },
              {
                "featureValue": "კი",
                "productId": 234931,
                "featureGroupCaption": "Gaming კლავიატურა",
                "featureCaption": "sad"
              }
            ]
          },
          {
            "featureCaption": "კლავიატურა",
            "featureValues": [
              {
                "featureValue": "esim",
                "productId": 32586,
                "featureGroupCaption": "Gaming კლავიატურა",
                "featureCaption": "კლავიატურა"
              },
              {
                "featureValue": "dual",
                "productId": 234935,
                "featureGroupCaption": "Gaming კლავიატურა",
                "featureCaption": "კლავიატურა"
              },
              {
                "featureValue": "esim",
                "productId": 234934,
                "featureGroupCaption": "Gaming კლავიატურა",
                "featureCaption": "კლავიატურა"
              },
              {
                "featureValue": "dual",
                "productId": 234931,
                "featureGroupCaption": "Gaming კლავიატურა",
                "featureCaption": "კლავიატურა"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "წინა კამერა",
        "features": [
          {
            "featureCaption": "ბრენდის ქვეყანა",
            "featureValues": [
              {
                "featureValue": "მალაიზი",
                "productId": 32586,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "ბრენდის ქვეყანა"
              },
              {
                "featureValue": "მალაიზი",
                "productId": 234935,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "ბრენდის ქვეყანა"
              },
              {
                "featureValue": "ინდოეთი",
                "productId": 234934,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "ბრენდის ქვეყანა"
              },
              {
                "featureValue": "გლდანი",
                "productId": 234931,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "ბრენდის ქვეყანა"
              }
            ]
          },
          {
            "featureCaption": "სელფის კამერა",
            "featureValues": [
              {
                "featureValue": "10 MP",
                "productId": 32586,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "სელფის კამერა"
              },
              {
                "featureValue": "1",
                "productId": 234935,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "სელფის კამერა"
              },
              {
                "featureValue": "1",
                "productId": 234934,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "სელფის კამერა"
              },
              {
                "featureValue": "1",
                "productId": 234931,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "სელფის კამერა"
              }
            ]
          },
          {
            "featureCaption": "ვიდეო",
            "featureValues": [
              {
                "featureValue": "Cinematic mode",
                "productId": 32586,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "ვიდეო"
              },
              {
                "featureValue": "720p@960fps",
                "productId": 234935,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "ვიდეო"
              },
              {
                "featureValue": "720p@960fps",
                "productId": 234934,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "ვიდეო"
              },
              {
                "featureValue": "8K@24fps",
                "productId": 234931,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "ვიდეო"
              }
            ]
          },
          {
            "featureCaption": "დამატებითი თვისებები",
            "featureValues": [
              {
                "featureValue": "8 MP, f/2.2,",
                "productId": 32586,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "დამატებითი თვისებები"
              },
              {
                "featureValue": "5 MP, f/2.0",
                "productId": 234935,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "დამატებითი თვისებები"
              },
              {
                "featureValue": "5 MP",
                "productId": 234934,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "დამატებითი თვისებები"
              },
              {
                "featureValue": "5 MP",
                "productId": 234931,
                "featureGroupCaption": "წინა კამერა",
                "featureCaption": "დამატებითი თვისებები"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "ფერი",
        "features": [
          {
            "featureCaption": "ფერი",
            "featureValues": [
              {
                "featureValue": "შავი",
                "productId": 32586,
                "featureGroupCaption": "ფერი",
                "featureCaption": "ფერი"
              },
              {
                "featureValue": "შავი",
                "productId": 234935,
                "featureGroupCaption": "ფერი",
                "featureCaption": "ფერი"
              },
              {
                "featureValue": "ყავისფერი",
                "productId": 234934,
                "featureGroupCaption": "ფერი",
                "featureCaption": "ფერი"
              },
              {
                "featureValue": "მწვანე",
                "productId": 234931,
                "featureGroupCaption": "ფერი",
                "featureCaption": "ფერი"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "ძირითადი მახასიათებლები",
        "features": [
          {
            "featureCaption": "ტესტ ოპერატიული მეხსიერება",
            "featureValues": [
              {
                "featureValue": "64 GB",
                "productId": 32586,
                "featureGroupCaption": "ძირითადი მახასიათებლები",
                "featureCaption": "ტესტ ოპერატიული მეხსიერება"
              },
              {
                "featureValue": "64 GB",
                "productId": 234935,
                "featureGroupCaption": "ძირითადი მახასიათებლები",
                "featureCaption": "ტესტ ოპერატიული მეხსიერება"
              },
              {
                "featureValue": "512 GB",
                "productId": 234934,
                "featureGroupCaption": "ძირითადი მახასიათებლები",
                "featureCaption": "ტესტ ოპერატიული მეხსიერება"
              },
              {
                "featureValue": "256 GB",
                "productId": 234931,
                "featureGroupCaption": "ძირითადი მახასიათებლები",
                "featureCaption": "ტესტ ოპერატიული მეხსიერება"
              }
            ]
          },
          {
            "featureCaption": "ტესტ ეკრანის ზომა",
            "featureValues": [
              {
                "featureValue": "15",
                "productId": 32586,
                "featureGroupCaption": "ძირითადი მახასიათებლები",
                "featureCaption": "ტესტ ეკრანის ზომა"
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              }
            ]
          },
          {
            "featureCaption": "ტესტ შიდა - მეხსიერება",
            "featureValues": [
              {
                "featureValue": "256",
                "productId": 32586,
                "featureGroupCaption": "ძირითადი მახასიათებლები",
                "featureCaption": "ტესტ შიდა - მეხსიერება"
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "პროცესორი",
        "features": [
          {
            "featureCaption": "პროცესორის ბირთვების რაოდენობა ",
            "featureValues": [
              {
                "featureValue": "6",
                "productId": 32586,
                "featureGroupCaption": "პროცესორი",
                "featureCaption": "პროცესორის ბირთვების რაოდენობა "
              },
              {
                "featureValue": "6",
                "productId": 234935,
                "featureGroupCaption": "პროცესორი",
                "featureCaption": "პროცესორის ბირთვების რაოდენობა "
              },
              {
                "featureValue": "6",
                "productId": 234934,
                "featureGroupCaption": "პროცესორი",
                "featureCaption": "პროცესორის ბირთვების რაოდენობა "
              },
              {
                "featureValue": "6",
                "productId": 234931,
                "featureGroupCaption": "პროცესორი",
                "featureCaption": "პროცესორის ბირთვების რაოდენობა "
              }
            ]
          },
          {
            "featureCaption": "პროცესორის სიხშირე",
            "featureValues": [
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "2 x 3.46 GHz Avalanche + 4x Blizzard",
                "productId": 234935,
                "featureGroupCaption": "პროცესორი",
                "featureCaption": "პროცესორის სიხშირე"
              },
              {
                "featureValue": "2 x 3.46 GHz Avalanche + 4x Blizzard",
                "productId": 234934,
                "featureGroupCaption": "პროცესორი",
                "featureCaption": "პროცესორის სიხშირე"
              },
              {
                "featureValue": "2 x 3.46 GHz Avalanche + 4x Blizzard",
                "productId": 234931,
                "featureGroupCaption": "პროცესორი",
                "featureCaption": "პროცესორის სიხშირე"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "მეხსიერება",
        "features": [
          {
            "featureCaption": "ოპერატიული მეხსიერების მოცულობა",
            "featureValues": [
              {
                "featureValue": "12 GB",
                "productId": 32586,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "ოპერატიული მეხსიერების მოცულობა"
              },
              {
                "featureValue": "1 GB",
                "productId": 234935,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "ოპერატიული მეხსიერების მოცულობა"
              },
              {
                "featureValue": "1 GB",
                "productId": 234934,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "ოპერატიული მეხსიერების მოცულობა"
              },
              {
                "featureValue": "1 GB",
                "productId": 234931,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "ოპერატიული მეხსიერების მოცულობა"
              }
            ]
          },
          {
            "featureCaption": "შიდა მეხსიერების მოცულობა",
            "featureValues": [
              {
                "featureValue": "128 GB",
                "productId": 32586,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "შიდა მეხსიერების მოცულობა"
              },
              {
                "featureValue": "128 GB",
                "productId": 234935,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "შიდა მეხსიერების მოცულობა"
              },
              {
                "featureValue": "128 GB",
                "productId": 234934,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "შიდა მეხსიერების მოცულობა"
              },
              {
                "featureValue": "128 GB",
                "productId": 234931,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "შიდა მეხსიერების მოცულობა"
              }
            ]
          },
          {
            "featureCaption": "მეხსიერების ბარათის მხარდაჭერა",
            "featureValues": [
              {
                "featureValue": "microSD",
                "productId": 32586,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "მეხსიერების ბარათის მხარდაჭერა"
              },
              {
                "featureValue": "microSD",
                "productId": 234935,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "მეხსიერების ბარათის მხარდაჭერა"
              },
              {
                "featureValue": "microSD",
                "productId": 234934,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "მეხსიერების ბარათის მხარდაჭერა"
              },
              {
                "featureValue": "microSD",
                "productId": 234931,
                "featureGroupCaption": "მეხსიერება",
                "featureCaption": "მეხსიერების ბარათის მხარდაჭერა"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "პლატფორმა",
        "features": [
          {
            "featureCaption": "ჩიპსეტი",
            "featureValues": [
              {
                "featureValue": "Apple A12 Bionic",
                "productId": 32586,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "ჩიპსეტი"
              },
              {
                "featureValue": "Apple A11 Bionic",
                "productId": 234935,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "ჩიპსეტი"
              },
              {
                "featureValue": "Apple A11 Bionic",
                "productId": 234934,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "ჩიპსეტი"
              },
              {
                "featureValue": "Apple A11 Bionic",
                "productId": 234931,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "ჩიპსეტი"
              }
            ]
          },
          {
            "featureCaption": "პროცესორი",
            "featureValues": [
              {
                "featureValue": "Apple A14 Bionic",
                "productId": 32586,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "პროცესორი"
              },
              {
                "featureValue": "A13 Bionic",
                "productId": 234935,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "პროცესორი"
              },
              {
                "featureValue": "A13 Bionic",
                "productId": 234934,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "პროცესორი"
              },
              {
                "featureValue": "8 x 2.0 GHz ARM Cortex-A53",
                "productId": 234931,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "პროცესორი"
              }
            ]
          },
          {
            "featureCaption": "ოპერაციული სისტემა",
            "featureValues": [
              {
                "featureValue": "Android 10",
                "productId": 32586,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "ოპერაციული სისტემა"
              },
              {
                "featureValue": "Android 10",
                "productId": 234935,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "ოპერაციული სისტემა"
              },
              {
                "featureValue": "Android 10",
                "productId": 234934,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "ოპერაციული სისტემა"
              },
              {
                "featureValue": "Android 10",
                "productId": 234931,
                "featureGroupCaption": "პლატფორმა",
                "featureCaption": "ოპერაციული სისტემა"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "ქსელი",
        "features": [
          {
            "featureCaption": "ტექნოლოგია",
            "featureValues": [
              {
                "featureValue": "GSM / CDMA / HSPA / EVDO / LTE",
                "productId": 32586,
                "featureGroupCaption": "ქსელი",
                "featureCaption": "ტექნოლოგია"
              },
              {
                "featureValue": "GSM",
                "productId": 234935,
                "featureGroupCaption": "ქსელი",
                "featureCaption": "ტექნოლოგია"
              },
              {
                "featureValue": "GSM",
                "productId": 234934,
                "featureGroupCaption": "ქსელი",
                "featureCaption": "ტექნოლოგია"
              },
              {
                "featureValue": "GSM",
                "productId": 234931,
                "featureGroupCaption": "ქსელი",
                "featureCaption": "ტექნოლოგია"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "გარანტია",
        "features": [
          {
            "featureCaption": "გარანტიის ვადა",
            "featureValues": [
              {
                "featureValue": "2 წელი",
                "productId": 32586,
                "featureGroupCaption": "გარანტია",
                "featureCaption": "გარანტიის ვადა"
              },
              {
                "featureValue": "2 წელი",
                "productId": 234935,
                "featureGroupCaption": "გარანტია",
                "featureCaption": "გარანტიის ვადა"
              },
              {
                "featureValue": "2 წელი",
                "productId": 234934,
                "featureGroupCaption": "გარანტია",
                "featureCaption": "გარანტიის ვადა"
              },
              {
                "featureValue": "2 წელი",
                "productId": 234931,
                "featureGroupCaption": "გარანტია",
                "featureCaption": "გარანტიის ვადა"
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "დიზაინი",
        "features": [
          {
            "featureCaption": "ტესტ-ფერი",
            "featureValues": [
              {
                "featureValue": "წითელი",
                "productId": 32586,
                "featureGroupCaption": "დიზაინი",
                "featureCaption": "ტესტ-ფერი"
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              }
            ]
          },
          {
            "featureCaption": "ტესტ Default",
            "featureValues": [
              {
                "featureValue": "Test22",
                "productId": 32586,
                "featureGroupCaption": "დიზაინი",
                "featureCaption": "ტესტ Default"
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              }
            ]
          }
        ]
      },
      {
        "featureGroupCaption": "sdad",
        "features": [
          {
            "featureCaption": "test123",
            "featureValues": [
              {
                "featureValue": "სდს",
                "productId": 32586,
                "featureGroupCaption": "sdad",
                "featureCaption": "test123"
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              },
              {
                "featureValue": "",
                "productId": null,
                "featureGroupCaption": "",
                "featureCaption": ""
              }
            ]
          }
        ]
      }
    ])
  }
}