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

  export const surveyData = {
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