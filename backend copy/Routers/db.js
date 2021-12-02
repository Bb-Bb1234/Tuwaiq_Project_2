const user = [
  {
    id: 0,
    password: "badar",
    name: "mohammed",
    RecordedTest: [
      {
        test: "",
        day: "",
      },
    ],
    AvailableTest: [
      {
        TestNaem: "اختبار كفايات المصلحين – ديسمبر 2021م",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "عربي",
        TestMechanism: "محوسب",
      },
      {
        TestNaem: "اختبار نواتج التعلم – جامعة الملك سعود – ديسمبر 2021",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي / انجليزي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "اختبار كفايات اللغة الإنجليزية لمرشحي الجامعة السعودية الإلكترونية – نوفمبر 2021",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "انجليزي",
        TestMechanism: "محوسب",
      },
      {
        TestNaem:
          "الاختيار الوظيفي - اختبار القدرة المعرفية العامة – رجال – يناير 2022م",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "عربي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "اختبار تحديد مستوى اللغة الإنجليزية - English Placement Test (EPT)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "انجليزي",
        TestMechanism: "محوسب",
      },
      {
        TestNaem: "اختبار القدرات العامة للجامعيين (على الحاسب الآلي)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي",
        TestMechanism: "محوسب",
      },
    ],
    RecordedTests: [
      {
        TestNaem: "اختبار المعلمين - الاختبار التخصصي - ربيع الثاني 1436هـ ",
        TestHeadquarters: "جامعة نجران - كلية الهندسة",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: " 1436/04/15 هـ-2015/02/04 مساءا",
        PaymentMethod: "تحويل بنكي",
      },
      {
        TestNaem: "اختبار المعلمين - الاختبار العام - ربيع الثاني 1436هـ",
        TestHeadquarters: "جامعة نجران - كلية الهندسة",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: "1436/04/12 هـ-2015/02/01 مساءا",
        PaymentMethod: "ايداع صراف",
      },
    ],
    CanceledTest: [
      {
        TestNaem:
          "اختبار المعلمين الجدد – رجال – الاختبار التخصصي - نوفمبر 2019",
        TestHeadquarters: "جامعة الملك سعود - مركز المدرجات (مبنى 6)",
        TestDate: "1441/04/02 هـ-2019/11/29 مساءً",
        CancellationDate: "1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
      {
        TestNaem: "اختبار المعلمين الجدد – رجال – الاختبار العام - نوفمبر 2019",
        TestHeadquarters: " جامعة الملك سعود - مركز المدرجات (مبنى 6)",
        TestDate: "1441/03/28 هـ-2019/11/25 مساءً",
        CancellationDate: " 1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
    ],
    TestResult: [
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 70,
        TestDate: "1431/05/22 - 2010/05/06",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 62,
        TestDate: "1431/01/14 - 2009/12/31",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 60,
        TestDate: "1430/05/12 - 2009/05/07",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 56,
        TestDate: " 1430/01/11 - 2009/01/08",
      },
    ],

    email: "mohammed@gmail.com",
    userName: "mohammed",
    password: "0115599",
  },
  {
    id: 1,
    name: "Ahmad",
    password: "2233",
    RecordedTest: [
      {
        test: "",
        day: "",
      },
    ],
    AvailableTest: [
      {
        TestNaem: "اختبار كفايات المصلحين اكتوبر  2020م",
        RecordingStatus: "تسجيل متاخر",
        Testlanguage: "عربي",
        TestMechanism: "محوسب",
      },
      {
        TestNaem: "اختبار نواتج التعلم – جامعة الملك سعود – فبراير 2019",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي / انجليزي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "اختبار كفايات اللغة الإنجليزية لمرشحي الجامعة السعودية الإلكترونية – مايو 2019",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "انجليزي",
        TestMechanism: "محوسب",
      },
      {
        TestNaem:
          "الاختيار الوظيفي - اختبار القدرة المعرفية العامة – رجال – ابريل 2018م",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "عربي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "اختبار تحديد مستوى اللغة الإنجليزية - English Placement Test (EPT)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "انجليزي",
        TestMechanism: "محوسب",
      },
      {
        TestNaem: "اختبار القدرات العامة للجامعيين (على الحاسب الآلي)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي",
        TestMechanism: "محوسب",
      },
    ],
    RecordedTests: [
      {
        TestNaem: "اختبار المعلمين - الاختبار التخصصي - ربيع الثاني 1432هـ ",
        TestHeadquarters: "جامعة نجران - كلية الهندسة",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: " 1432/04/15 هـ-2015/02/04 مساءا",
        PaymentMethod: "تحويل بنكي",
      },
      {
        TestNaem: "اختبار المعلمين - الاختبار العام - جمادى الاخرة  1436هـ",
        TestHeadquarters: "جامعة نجران - كلية الهندسة",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: "1436/06/12 هـ-2015/12/01 مساءا",
        PaymentMethod: "ايداع صراف",
      },
    ],
    CanceledTest: [
      {
        TestNaem:
          "اختبار المعلمين الجدد – رجال – الاختبار التخصصي - نوفمبر 2019",
        TestHeadquarters: "جامعة الملك فيصل - مركز المدرجات (مبنى 6)",
        TestDate: "1441/04/02 هـ-2019/11/29 مساءً",
        CancellationDate: "1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
      {
        TestNaem: "اختبار المعلمين الجدد – رجال – الاختبار العام - نوفمبر 2019",
        TestHeadquarters: " جامعة الملك فيصل - مركز المدرجات (مبنى 6)",
        TestDate: "1441/03/28 هـ-2019/11/25 مساءً",
        CancellationDate: " 1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
    ],
    TestResult: [
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 68,
        TestDate: "1431/05/22 - 2010/05/06",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 60,
        TestDate: "1431/01/14 - 2009/12/31",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 55,
        TestDate: "1430/05/12 - 2009/05/07",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 81,
        TestDate: " 1430/01/11 - 2009/01/08",
      },
    ],
    date: "1/4/1432",
    email: "Ahmad@gmail.com",
    userName: "Ahmad",
    password: "0335577",
  },
  {
    id: 2,
    name: "Badar",
    password: "3344",
    RecordedTest: [
      {
        test: "",
        day: "",
      },
    ],
    AvailableTest: [
      {
        TestNaem: "اختبار كفايات المصلحين ديسمبر  2020م",
        RecordingStatus: "تسجيل متقدم",
        Testlanguage: "عربي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem: "اختبار نواتج التعلم – جامعة الملك سعود – يوليو 2019",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي / انجليزي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "اختبار كفايات اللغة الإنجليزية لمرشحي الجامعة السعودية الإلكترونية – مايو 2019",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "انجليزي",
        TestMechanism: "محوسب",
      },
      {
        TestNaem:
          "الاختيار الوظيفي - اختبار القدرة المعرفية العامة – رجال – نوفمبر 2018م",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "عربي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "أختبار مستوى تحديد القدرات الجامعية - English Placement Test (EPT)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "انجليزي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem: "اختبار القدرات العامة للجامعيين (على الحاسب الآلي)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي",
        TestMechanism: "محوسب",
      },
    ],
    RecordedTests: [
      {
        TestNaem: "اختبار المعلمين - الاختبار التخصصي - ربيع الثاني 1432هـ ",
        TestHeadquarters: "جامعة حائل - كلية الطب",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: " 1432/04/15 هـ-2015/02/04 مساءا",
        PaymentMethod: "تحويل بنكي",
      },
      {
        TestNaem: "اختبار المعلمين - الاختبار العام - جمادى الاخرة  1436هـ",
        TestHeadquarters: "جامعة حائل - كلية الحاسب الالي ونظم المعلومات",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: "1436/06/12 هـ-2015/12/01 مساءا",
        PaymentMethod: "ايداع صراف",
      },
    ],
    CanceledTest: [
      {
        TestNaem:
          "اختبار تجديد الرخصه للمعلمين – رجال – الاختبار التخصصي - نوفمبر 2019",
        TestHeadquarters: "جامعة ام القرى  - مركز المدرجات (مبنى 6)",
        TestDate: "1441/04/02 هـ-2019/11/29 مساءً",
        CancellationDate: "1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
      {
        TestNaem: "اختبار المعلمين الجدد – رجال – الاختبار العام - نوفمبر 2017",
        TestHeadquarters: " جامعة ام القرى  - مركز المدرجات (مبنى 6)",
        TestDate: "1441/03/28 هـ-2019/11/25 مساءً",
        CancellationDate: " 1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
    ],
    TestResult: [
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 70,
        TestDate: "1431/05/22 - 2010/05/06",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 56,
        TestDate: "1431/01/14 - 2009/12/31",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 65,
        TestDate: "1430/05/12 - 2009/05/07",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 72,
        TestDate: " 1430/01/11 - 2009/01/08",
      },
    ],
    date: "22/5/1441",
    email: "Badar@gmail.com",
    userName: "Badar",
    password: "0995511",
  },
  {
    id: 3,
    name: "Salem",
    password: "4455",
    RecordedTest: [
      {
        test: "",
        day: "",
      },
    ],
    AvailableTest: [
      {
        TestNaem: "اختبار كفايات المصلحين ديسمبر  2020م",
        RecordingStatus: "تسجيل متقدم",
        Testlanguage: "عربي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem: "اختبار نواتج التعلم – جامعة الملك سعود – يوليو 2019",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي / انجليزي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "اختبار كفايات اللغة الإنجليزية لمرشحي الجامعة السعودية الإلكترونية – مايو 2019",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "انجليزي",
        TestMechanism: "محوسب",
      },
      {
        TestNaem:
          "الاختيار الوظيفي - اختبار القدرة المعرفية العامة – رجال – نوفمبر 2018م",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "عربي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "أختبار مستوى تحديد القدرات الجامعية - English Placement Test (EPT)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "انجليزي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem: "اختبار القدرات العامة للجامعيين (على الحاسب الآلي)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي",
        TestMechanism: "محوسب",
      },
    ],
    RecordedTests: [
      {
        TestNaem: "اختبار المعلمين - الاختبار التخصصي - ربيع الثاني 1432هـ ",
        TestHeadquarters: "جامعة حائل - كلية الطب",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: " 1432/04/15 هـ-2015/02/04 مساءا",
        PaymentMethod: "تحويل بنكي",
      },
      {
        TestNaem: "اختبار المعلمين - الاختبار العام - جمادى الاخرة  1436هـ",
        TestHeadquarters: "جامعة حائل - كلية الحاسب الالي ونظم المعلومات",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: "1436/06/12 هـ-2015/12/01 مساءا",
        PaymentMethod: "ايداع صراف",
      },
    ],
    CanceledTest: [
      {
        TestNaem:
          "اختبار تجديد الرخصه للمعلمين – رجال – الاختبار التخصصي - نوفمبر 2019",
        TestHeadquarters: "جامعة ام القرى  - مركز المدرجات (مبنى 6)",
        TestDate: "1441/04/02 هـ-2019/11/29 مساءً",
        CancellationDate: "1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
      {
        TestNaem: "اختبار المعلمين الجدد – رجال – الاختبار العام - نوفمبر 2017",
        TestHeadquarters: " جامعة ام القرى  - مركز المدرجات (مبنى 6)",
        TestDate: "1441/03/28 هـ-2019/11/25 مساءً",
        CancellationDate: " 1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
    ],
    TestResult: [
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 70,
        TestDate: "1431/05/22 - 2010/05/06",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 56,
        TestDate: "1431/01/14 - 2009/12/31",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 65,
        TestDate: "1430/05/12 - 2009/05/07",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 72,
        TestDate: " 1430/01/11 - 2009/01/08",
      },
    ],
    date: "1/3/1432",
    email: "Salem@gmail.com",
    userName: "Salem",
    password: "0995511",
  },
  {
    id: 4,
    name: "Naser",
    password: "5566",
    RecordedTest: [
      {
        test: "",
        day: "",
      },
    ],
    AvailableTest: [
      {
        TestNaem: "اختبار كفايات المصلحين ديسمبر  2020م",
        RecordingStatus: "تسجيل متقدم",
        Testlanguage: "عربي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem: "اختبار نواتج التعلم – جامعة الملك سعود – يوليو 2019",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي / انجليزي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "اختبار كفايات اللغة الإنجليزية لمرشحي الجامعة السعودية الإلكترونية – مايو 2019",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "انجليزي",
        TestMechanism: "محوسب",
      },
      {
        TestNaem:
          "الاختيار الوظيفي - اختبار القدرة المعرفية العامة – رجال – نوفمبر 2018م",
        RecordingStatus: "تسجيل مبكر",
        Testlanguage: "عربي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem:
          "أختبار مستوى تحديد القدرات الجامعية - English Placement Test (EPT)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "انجليزي",
        TestMechanism: "ورقي",
      },
      {
        TestNaem: "اختبار القدرات العامة للجامعيين (على الحاسب الآلي)",
        RecordingStatus: "تسجيل متأخر",
        Testlanguage: "عربي",
        TestMechanism: "محوسب",
      },
    ],
    RecordedTests: [
      {
        TestNaem: "اختبار المعلمين - الاختبار التخصصي - ربيع الثاني 1432هـ ",
        TestHeadquarters: "جامعة حائل - كلية الطب",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: " 1432/04/15 هـ-2015/02/04 مساءا",
        PaymentMethod: "تحويل بنكي",
      },
      {
        TestNaem: "اختبار المعلمين - الاختبار العام - جمادى الاخرة  1436هـ",
        TestHeadquarters: "جامعة حائل - كلية الحاسب الالي ونظم المعلومات",
        TestMechanism: "ورقي",
        AttendanceStatus: "حاضر",
        RecordingStatus: "مغلق",
        TestDate: "1436/06/12 هـ-2015/12/01 مساءا",
        PaymentMethod: "ايداع صراف",
      },
    ],
    CanceledTest: [
      {
        TestNaem:
          "اختبار تجديد الرخصه للمعلمين – رجال – الاختبار التخصصي - نوفمبر 2019",
        TestHeadquarters: "جامعة ام القرى  - مركز المدرجات (مبنى 6)",
        TestDate: "1441/04/02 هـ-2019/11/29 مساءً",
        CancellationDate: "1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
      {
        TestNaem: "اختبار المعلمين الجدد – رجال – الاختبار العام - نوفمبر 2017",
        TestHeadquarters: " جامعة ام القرى  - مركز المدرجات (مبنى 6)",
        TestDate: "1441/03/28 هـ-2019/11/25 مساءً",
        CancellationDate: " 1441/01/21 هـ-2019/09/20",
        TestMechanism: "ورقي",
        ReasonCancellation: "ملغي لعدم السداد",
      },
    ],
    TestResult: [
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 70,
        TestDate: "1431/05/22 - 2010/05/06",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 56,
        TestDate: "1431/01/14 - 2009/12/31",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 65,
        TestDate: "1430/05/12 - 2009/05/07",
      },
      {
        TestNaem: "اختبار القدرات العامة للتخصصات العلمية",
        Result: 72,
        TestDate: " 1430/01/11 - 2009/01/08",
      },
    ],
    date: "7/8/1440",
    email: "Abdallh@gmail.com",
    userName: "Abdallh",
    password: "0995511",
  },
];

module.exports = { user };
