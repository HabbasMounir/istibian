export const surveyData1 = {
    sections: [
      {
        id: "section1",
        title: "المحور الأول",
        icon: "fa-eye",
        questions: [
          {
            id: "frequency",
            text: "كم عدد المرات التي شاهدت فيها مؤثرًا يروج لعلامة Make؟",
            type: "radio",
            options: [
              { value: "frequently", label: "كثيرًا" },
              { value: "occasionally", label: "قليلاً" },
              { value: "rarely", label: "قليلاً جدًا" }
            ]
          },
          {
            id: "platform",
            text: "على أي منصة شاهدت هذا الترويج؟",
            type: "checkbox",
            options: [
              { value: "instagram", label: "انستغرام" },
              { value: "facebook", label: "فيسبوك" },
              { value: "tiktok", label: "تيكتوك" },
              { value: "youtube", label: "يوتيوب" },
              { value: "other", label: "أخرى" }
            ]
          }
        ]
      },
      {
        id: "section2",
        title: "المحور الثاني: المعلومات الشخصية",
        icon: "fa-user",
        questions: [
          {
            id: "age",
            text: "العمر:",
            type: "radio",
            options: [
              { value: "<20", label: "أقل من 20" },
              { value: "20-35", label: "من 20 إلى 35" },
              { value: "35-55", label: "من 35 إلى 55" },
              { value: ">55", label: "أكثر من 55" }
            ]
          },
          {
            id: "gender",
            text: "الجنس:",
            type: "radio",
            options: [
              { value: "female", label: "أنثى" },
              { value: "male", label: "ذكر" }
            ]
          },
          {
            id: "occupation",
            text: "المهنة:",
            type: "radio",
            options: [
              { value: "student", label: "طالب" },
              { value: "employee", label: "موظف" },
              { value: "freelancer", label: "عمل حر" },
              { value: "other", label: "أخرى" }
            ]
          }
        ]
      },
      {
        id: "section3",
        title: "المحور الثالث: أبعاد شخصية العلامة",
        icon: "fa-star",
        questions: [
          {
            id: "sincerity1",
            text: "يبدو المؤثرون الذين يروجون لـ Make صادقين ومخلصين",
            type: "likert"
          },
          {
            id: "sincerity2",
            text: "المحتوى الذي يقدمه المؤثرون عن Make عفوي وصادق",
            type: "likert"
          },
          {
            id: "sincerity3",
            text: "يعبر المؤثرون عن آرائهم الحقيقية تجاه Make",
            type: "likert"
          },
          {
            id: "sincerity4",
            text: "تبدو Make علامة موثوقة من خلال منشورات المؤثرين",
            type: "likert"
          },
          {
            id: "sincerity5",
            text: "أشعر أن Make تهتم فعلاً بعملائها كما يظهر من تعاونها مع المؤثرين",
            type: "likert"
          },
          {
            id: "excitement1",
            text: "يجعلني المؤثرون أرى Make كعلامة مليئة بالحيوية والنشاط",
            type: "likert"
          },
          {
            id: "excitement2",
            text: "المحتوى الذي يقوم به المؤثرون عن Make ممتع ومسلي",
            type: "likert"
          },
          {
            id: "excitement3",
            text: "يقدم المؤثرون Make بطريقة عصرية وجذابة",
            type: "likert"
          },
          {
            id: "excitement4",
            text: "أشعر بالحماس تجاه منتجات Make بعد متابعة المؤثرين",
            type: "likert"
          },
          {
            id: "excitement5",
            text: "تبدو Make مغامرة وجريئة من خلال منشورات المؤثرين",
            type: "likert"
          },
          {
            id: "competence1",
            text: "يظهر المؤثرون علامة Make كعلامة محترفة وموثوقة",
            type: "likert"
          },
          {
            id: "competence2",
            text: "يبدو المؤثرون على دراسة جيدة بمنتجات Make",
            type: "likert"
          },
          {
            id: "competence3",
            text: "تبدو Make علامة تقدم منتجات عالية الجودة من خلال ما يروجه المؤثرون",
            type: "likert"
          },
          {
            id: "competence4",
            text: "يبرز المؤثرون مهارات وخبرات Make",
            type: "likert"
          },
          {
            id: "competence5",
            text: "يجعلني المؤثرون أثق بقدرة Make على تلبية احتياجات العملاء",
            type: "likert"
          },
          {
            id: "sophistication1",
            text: "يصور المؤثرون Make كعلامة أنيقة وراقية",
            type: "likert"
          },
          {
            id: "sophistication2",
            text: "يبدو المحتوى المقدم عن Make راقيًا ومميزًا",
            type: "likert"
          },
          {
            id: "sophistication3",
            text: "تظهر Make كعلامة فخمة وعصرية",
            type: "likert"
          },
          {
            id: "sophistication4",
            text: "يختار المؤثرون أسلوبًا راقيًا عند الحديث عن Make",
            type: "likert"
          },
          {
            id: "sophistication5",
            text: "تبدو Make ذات قيمة عالية من خلال منشورات المؤثرين",
            type: "likert"
          },
          {
            id: "ruggedness1",
            text: "يقدم المؤثرون Make كعلامة قوية ومتينة",
            type: "likert"
          },
          {
            id: "ruggedness2",
            text: "تظهر Make من خلال محتوى المؤثرين كعلامة جريئة",
            type: "likert"
          },
          {
            id: "ruggedness3",
            text: "يربط المؤثرون Make بأنماط حياة نشطة ومغامرة",
            type: "likert"
          },
          {
            id: "ruggedness4",
            text: "تبدو Make علامة للأشخاص الأقوياء والمستقرين من خلال ما يعرضه المؤثرون",
            type: "likert"
          },
          {
            id: "ruggedness5",
            text: "تعكس حملات المؤثرين Make كعلامة قوية واعتمادية",
            type: "likert"
          }
        ]
      }
    ]
  };

  export const surveyData2 = {
    sections: [
      {
        id: "section1",
        title: "المحور الأول",
        icon: "fa-eye",
        questions: [
          {
            id: "frequency",
            text: "كم عدد المرات التي شاهدت فيها مؤثرًا يروج لعلامة Make؟",
            type: "radio",
            options: [
              { value: "frequently", label: "كثيرًا" },
              { value: "occasionally", label: "قليلاً" },
              { value: "rarely", label: "قليلاً جدًا" }
            ]
          },
          {
            id: "platform",
            text: "على أي منصة شاهدت هذا الترويج؟",
            type: "checkbox",
            options: [
              { value: "instagram", label: "انستغرام" },
              { value: "facebook", label: "فيسبوك" },
              { value: "tiktok", label: "تيكتوك" },
              { value: "youtube", label: "يوتيوب" },
              { value: "other", label: "أخرى" }
            ]
          }
        ]
      },
      {
        id: "section2",
        title: "المحور الثاني: المعلومات الشخصية",
        icon: "fa-user",
        questions: [
          {
            id: "age",
            text: "العمر:",
            type: "radio",
            options: [
              { value: "<20", label: "أقل من 20" },
              { value: "20-35", label: "من 20 إلى 35" },
              { value: "35-55", label: "من 35 إلى 55" },
              { value: ">55", label: "أكثر من 55" }
            ]
          },
          {
            id: "gender",
            text: "الجنس:",
            type: "radio",
            options: [
              { value: "female", label: "أنثى" },
              { value: "male", label: "ذكر" }
            ]
          },
          {
            id: "occupation",
            text: "المهنة:",
            type: "radio",
            options: [
              { value: "student", label: "طالب" },
              { value: "employee", label: "موظف" },
              { value: "freelancer", label: "عمل حر" },
              { value: "other", label: "أخرى" }
            ]
          }
        ]
      },
      {
        id: "section3",
        title: " المحور الثالث: أبعاد شخصية العلامة (الصدق)",
        icon: "fa-star",
        questions: [
          {
            id: "sincerity1",
            text: "يبدو المؤثرون الذين يروجون لـ Make صادقين ومخلصين",
            type: "likert"
          },
          {
            id: "sincerity2",
            text: "المحتوى الذي يقدمه المؤثرون عن Make عفوي وصادق",
            type: "likert"
          },
          {
            id: "sincerity3",
            text: "يعبر المؤثرون عن آرائهم الحقيقية تجاه Make",
            type: "likert"
          },
          {
            id: "sincerity4",
            text: "تبدو Make علامة موثوقة من خلال منشورات المؤثرين",
            type: "likert"
          },
          {
            id: "sincerity5",
            text: "أشعر أن Make تهتم فعلاً بعملائها كما يظهر من تعاونها مع المؤثرين",
            type: "likert"
          },]
        } , {
            id: "section4",
            title: "المحور الثالث: أبعاد شخصية العلامة (الحماس)" ,
            icon: "fa-star",
            questions: [
          {
            id: "excitement1",
            text: "يجعلني المؤثرون أرى Make كعلامة مليئة بالحيوية والنشاط",
            type: "likert"
          },
          {
            id: "excitement2",
            text: "المحتوى الذي يقوم به المؤثرون عن Make ممتع ومسلي",
            type: "likert"
          },
          {
            id: "excitement3",
            text: "يقدم المؤثرون Make بطريقة عصرية وجذابة",
            type: "likert"
          },
          {
            id: "excitement4",
            text: "أشعر بالحماس تجاه منتجات Make بعد متابعة المؤثرين",
            type: "likert"
          },
          {
            id: "excitement5",
            text: "تبدو Make مغامرة وجريئة من خلال منشورات المؤثرين",
            type: "likert"
          },
        ]
        }, {
            id: "section5",
            title: "المحور الثالث: أبعاد شخصية العلامة (الكفاءة)",
            icon: "fa-star",
            questions: [
            {
            id: "competence1",
            text: "يظهر المؤثرون علامة Make كعلامة محترفة وموثوقة",
            type: "likert"
          },
          {
            id: "competence2",
            text: "يبدو المؤثرون على دراسة جيدة بمنتجات Make",
            type: "likert"
          },
          {
            id: "competence3",
            text: "تبدو Make علامة تقدم منتجات عالية الجودة من خلال ما يروجه المؤثرون",
            type: "likert"
          },
          {
            id: "competence4",
            text: "يبرز المؤثرون مهارات وخبرات Make",
            type: "likert"
          },
          {
            id: "competence5",
            text: "يجعلني المؤثرون أثق بقدرة Make على تلبية احتياجات العملاء",
            type: "likert"
          },
            
            ]
        },{
            id: "section5",
            title: "المحور الثالث: أبعاد شخصية العلامة (الرقي والأناقة)",
            icon: "fa-star",
            questions: [
                {
                    id: "sophistication1",
                    text: "يصور المؤثرون Make كعلامة أنيقة وراقية",
                    type: "likert"
                  },
                  {
                    id: "sophistication2",
                    text: "يبدو المحتوى المقدم عن Make راقيًا ومميزًا",
                    type: "likert"
                  },
                  {
                    id: "sophistication3",
                    text: "تظهر Make كعلامة فخمة وعصرية",
                    type: "likert"
                  },
                  {
                    id: "sophistication4",
                    text: "يختار المؤثرون أسلوبًا راقيًا عند الحديث عن Make",
                    type: "likert"
                  },
                  {
                    id: "sophistication5",
                    text: "تبدو Make ذات قيمة عالية من خلال منشورات المؤثرين",
                    type: "likert"
                  },
                ]
        },{
            id: "section6",
            title: "المحور الثالث: أبعاد شخصية العلامة (القوة والصلابة)",
            icon: "fa-star",
            questions: [
          {
            id: "ruggedness1",
            text: "يقدم المؤثرون Make كعلامة قوية ومتينة",
            type: "likert"
          },
          {
            id: "ruggedness2",
            text: "تظهر Make من خلال محتوى المؤثرين كعلامة جريئة",
            type: "likert"
          },
          {
            id: "ruggedness3",
            text: "يربط المؤثرون Make بأنماط حياة نشطة ومغامرة",
            type: "likert"
          },
          {
            id: "ruggedness4",
            text: "تبدو Make علامة للأشخاص الأقوياء والمستقرين من خلال ما يعرضه المؤثرون",
            type: "likert"
          },
          {
            id: "ruggedness5",
            text: "تعكس حملات المؤثرين Make كعلامة قوية واعتمادية",
            type: "likert"
          }
        ]
      }
    ]
  };


  export const surveyData = {
      "title": "استبيان تسويق المؤثرين لعلامة Make",
      "sections": [
       
        {
          "id": "section2",
          "title": " التسويق بالمؤثرين",
          "icon": "fa-star",
          "questions": [
            {
              "id": "influencer_sincerity",
              "text": "يبدو المؤثرون الذين يروجون ل Make صادقين ومعجبين بالمنتجات التي يعلنون عنها.",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "influencer_interaction",
              "text": "يتفاعل المؤثرون مع متابعيهم عند الترويج ل Make بطريقة تجعل التجربة تفاعلية وشخصية.",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "influencer_content",
              "text": "المحتوى الذي ينشئه المؤثرون عن Make مبتكر، جذاب بصريا وعالي الجودة.",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "influencer_platforms",
              "text": "يتم الترويج لعلامة Make على منصات التواصل المناسبة.",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "influencer_trust",
              "text": "أثق بآراء وتوصيات المؤثرين الذين يروجون ل Make.",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            }
          ]
        },
        {
          "id": "section3_sincerity",
          "title": "  الصدق (Sincerity)",
          "icon": "fa-star",
          "questions": [
            {
              "id": "brand_sincerity_1",
              "text": "تبدو علامة Make صادقة وموثوقة",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_sincerity_2",
              "text": "أشعر أن Make تهتم بعملائها واحتياجاتهم",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_sincerity_3",
              "text": "تقدر علامة Make نفسها بطريقة ودية وبسيطة",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            }
          ]
        },
        {
          "id": "section3_excitement",
          "title": "  الاثارة (Excitement)",
          "icon": "fa-star",
          "questions": [
            {
              "id": "brand_excitement_1",
              "text": "تبدو Make كعلامة حيوية وديناميكية",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_excitement_2",
              "text": "تبدو Make علامة عصرية وجذابة",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_excitement_3",
              "text": "تفاجئني Make بأفكار مبتكرة دائما",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            }
          ]
        },
        {
          "id": "section3_competence",
          "title": "  الكفاءة (Competence)",
          "icon": "fa-star",
          "questions": [
            {
              "id": "brand_competence_1",
              "text": "تبدو Make علامة احترافية وموثوقة",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_competence_2",
              "text": "تقدم Make منتجات عالية الجودة",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_competence_3",
              "text": "تبدو Make ذات تجربة وخبرة في مجالها",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            }
          ]
        },
        {
          "id": "section3_sophistication",
          "title": "  الرقي (Sophistication)",
          "icon": "fa-star",
          "questions": [
            {
              "id": "brand_sophistication_1",
              "text": "تمنح Make احساسا بالفخامة والأناقة",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_sophistication_2",
              "text": "تبدو علامة Make فاخرة وذات تصميم مميز وراقي",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_sophistication_3",
              "text": "تستهدف Make أشخاصا ذوي أذواق راقية",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            }
          ]
        },
        {
          "id": "section3_ruggedness",
          "title": " القوة والصلابة (Ruggedness)",
          "icon": "fa-star",
          "questions": [
            {
              "id": "brand_ruggedness_1",
              "text": "تعطي Make انطباعا بالقوة والصلابة",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_ruggedness_2",
              "text": "تظهر Make كعلامة جريئة، متينة واعتمادية",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            },
            {
              "id": "brand_ruggedness_3",
              "text": "يبدو أن Make موجهة للأشخاص الأكفاء",
              "type": "likert",
              "options": [
                { "value": "1", "label": "غير موافق بشدة" },
                { "value": "2", "label": "غير موافق" },
                { "value": "3", "label": "محايد" },
                { "value": "4", "label": "موافق" },
                { "value": "5", "label": "موافق بشدة" }
              ]
            }
          ]
        },
        {
          "id": "section4",
          "title": " الرؤية والمشاهدة",
          "icon": "fa-eye",
          "questions": [
            {
              "id": "visibility_frequency",
              "text": "كم عدد المرات التي شاهدت فيها مؤثرا يروج لعلامة Make:",
              "type": "radio",
              "options": [
                { "value": "many", "label": "كثيرا" },
                { "value": "few", "label": "قليلا" },
                { "value": "very_few", "label": "قليلا جدا" }
              ]
            },
            {
              "id": "visibility_platform",
              "text": "على أي منصة شاهدت هذا الترويج؟(يمكنك اختيار أكثر من اجابة)",
              "type": "checkbox",
              "options": [
                { "value": "instagram", "label": "انستغرام" },
                { "value": "facebook", "label": "فايسبوك" },
                { "value": "tiktok", "label": "تيكتوك" },
                { "value": "youtube", "label": "يوتيوب" },
                { "value": "other", "label": "أخرى" }
              ]
            }
          ]
        }, {
          "id": "section1",
          "title": "المعلومات الشخصية",
          "icon": "fa-user",
          "questions": [
            {
              "id": "age",
              "text": "العمر:",
              "type": "radio",
              "options": [
                { "value": "under25", "label": "أقل من 25" },
                { "value": "25to35", "label": "من 25 الى 35" },
                { "value": "35to45", "label": "من 35 الى 45" },
                { "value": "above45", "label": "أكثر من 45" }
              ]
            },
            {
              "id": "gender",
              "text": "الجنس:",
              "type": "radio",
              "options": [
                { "value": "female", "label": "أنثى" },
                { "value": "male", "label": "ذكر" }
              ]
            },
            {
              "id": "education",
              "text": "المستوى التعليمي:",
              "type": "radio",
              "options": [
                { "value": "middle", "label": "متوسط" },
                { "value": "highschool", "label": "ثانوي" },
                { "value": "university", "label": "جامعي" }
              ]
            },
            {
              "id": "occupation",
              "text": "المهنة:",
              "type": "radio",
              "options": [
                { "value": "student", "label": "طالب" },
                { "value": "employee", "label": "موظف" },
                { "value": "selfemployed", "label": "عمل حر/تاجر" },
                { "value": "other", "label": "أخرى" }
              ]
            },
            {
              "id": "income",
              "text": "الدخل:",
              "type": "radio",
              "options": [
                { "value": "under15k", "label": "أقل من 15000" },
                { "value": "15kto50k", "label": "15000 الى 50000" },
                { "value": "above50k", "label": "أكثر من 50000" }
              ]
            }
          ]
        }
      ]
    }
  