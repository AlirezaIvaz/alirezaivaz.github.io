---
title: خطای Multiple shrunk resources files found در پلاگین اندروید گریدل
authors: [ alirezaivaz ]
tags: [ android ]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

جمعهٔ دو هفتهٔ پیش می‌خواستم از یه پروژه خروجی امضاشده بگیرم و خب یه ذره به چالش خوردم! خروجی با فرمت APK بدون هیچ مشکلی
ساخته می‌شد اما برای فرمت **AAB** با این خطا برخورد می‌کردم:

```
Sequence contains more than one matching element.
```

توی این پست از اتفاقاتی که افتاد می‌نویسم.

<!-- truncate -->

این خطا در ظاهر داره می‌گه یه تنظیماتی توی گریدل باید فقط یه بار تعریف بشه و وجود داشته باشه اما بیشتر از یه بار توی
پروژه پیدا شده؛ اما خب برخلاف همیشه که بهمون آدرس دقیق یا حداقل یه سر نخ از مشکل رو می‌داد، این‌بار هیچ چیزی بهمون نگفته
و همین مشکل رو پیچیده‌تر می‌کنه.

بعد از این‌که توی گوگل دنبال راه حل گشتم و چیزی پیدا نکردم حدس زدم که خطای جدیدی باشه و مثل همیشه رفتم سراغ دوست عزیزم
ChatGPT و اونم یه سری حدس زد و هر چیزی که فکر می‌کرد می‌تونه باعث این مشکل شده باشه رو بهم گفت اما با اون هم به نتیجه‌ای
نرسیدم.

بعد از اون سعی کردم تغییراتی که توی اون چند روز توی پروژه اعمال کرده بودم رو برگردونم و خب هیچ نتیجه‌ای نداشت. تغییرات
رو برگردوندم به آخرین نسخه‌ای که مشکل نداشت و بعد قدم به قدم جلو اومدم و بعد از کلی گشت و گذار بالاخره فهمیدم این مشکل
از کی پیش اومده!

این مشکل وقتی پیش اومده که کتابخونه‌های پروژه رو آپدیت کردیم و خب قدم بعدی این بود که بفهمم این مشکل به‌خاطر کدومشونه و
خوشبختانه اولین کتابخونه‌ای که تست کردم یعنی **پلاگین اندروید برای گریدل** (**AGP** یا **Android Gradle Plugin**) که از
نسخهٔ **۸٫۷٫۳** به نسخهٔ **۸٫۱۰٫۱** به‌روزرسانی شده بود باعث این دردسر عجیب شده بود.

مشکل رو پیدا کردیم و چی بهتر از این اما خب یه مشکل بزرگ‌تر پیش اومد! توی این پروژه به‌خاطر یه دلیلی که هیچ کدوممون یادش
نیست 😁 باید از همین نسخهٔ جدید AGP استفاده می‌کردیم؛ پس این‌بار جایی برای برگشت به عقب نداشتیم و باید یه راه حل براش
پیدا می‌کردیم.

برای شروع رفتم سراغ [نسخه‌های AGP](https://developer.android.com/build/releases/gradle-plugin) که ببینم نسخهٔ جدیدی
اومده که این مشکل رو پیدا یا حل کرده باشه؟ و بله! نسخهٔ ۸٫۱۱ اینجاست اما خبری از رفع مشکل ما نیست 😕 با این‌حال گفتم هر
چیزی ارزش امتحان‌کردن رو داره و AGP رو به‌روزرسانی کردم. بعد از این‌که همه‌چیز دانلود شد، سعی کردم خروجی جدید بگیرم و
این‌بار با خطای جدیدی مواجه شدم که پیشرفت خوبی بود 😅

```
Multiple shrunk-resources files found in directory '...': [...]
Please disable building multiple APKs when building an Android app bundle. See https://issuetracker.google.com/402800800
```

حالا غیر از این‌که یه لینک هم داخل متن خطا هست، راه‌حل احتمالی رو هم می‌تونیم ببینیم و مربوط به Split APK هست که اصلا
معلوم نیست اینجا چی کار می‌کنه 😂 هدف این سیستم، ساختن فایل APK جداگانه برای هر معماری برای حذف وابستگی‌های اضافه و در
نتیجه کاهش حجم برنامه بود و نکته اینجاست که این سیستم برای خروجی‌های AAB استفاده نمی‌شه و هدف AAB این بوده که همهٔ این
فرآیند رو گوگل‌پلی و کافه‌بازار انجام بدن و ما درگیرش نشیم.

طبق اون چیزی که توی [این گزارش مشکل](https://issuetracker.google.com/402800800) گفتن، این مشکل از نسخهٔ ۸٫۹٫۰ پیش
اومده و توی نسخه ۸٫۱۱٫۰ هم متن خطایی که بالاتر گفتم رو اضافه کردن تا راحت‌تر متوجهش بشیم و دردسر کمتری داشته باشیم.

حالا از همهٔ این‌ها که بگذریم، می‌رسیم به راه حل؛ مشکل با غیرفعال‌کردن Split APK حل می‌شه:

<Tabs>
  <TabItem groupId="language" value="kotlin" label="Kotlin DSL" default>

```kotlin
android {
    splits {
        abi {
            isEnabled = false
        }
    }
}
```

  </TabItem>
  <TabItem groupId="language" value="groovy" label="Groovy DSL">

```groovy
android {
    splits {
        abi {
            enable false
        }
    }
}
```

  </TabItem>
</Tabs>

اما خب اگه خواستیم برای خروجی APK داشته باشیم و فقط برای خروجی AAB غیرفعال بشه چطور؟ راه حلی که توی بحث این مشکل گفته
شده این شکلیه:

```kotlin
android {
    splits {
        abi {
            val isBundleBuild = gradle.startParameter.taskNames.any { it.lowercase().contains("bundle") }
            isEnabled = !isBundleBuild
        }
    }
}
```

اینجا یه متغیر بولین داریم که چک می‌کنه آیا تسکی داریم که توی اسمش `bundle` داشته باشه یا نه و اگه داشته باشه یعنی داریم
خروجی AAB می‌گیریم؛ اما خب این کد برای من کار نکرد 😕 راه حلش البته خیلی سادس! کافیه متغیر رو ببریم خارج از بلاک
`splits`:

<Tabs>
  <TabItem groupId="language" value="kotlin" label="Kotlin DSL" default>

```kotlin
android {
    val isBundleBuild = gradle.startParameter.taskNames.any { it.lowercase().contains("bundle") }
    splits {
        abi {
            isEnabled = !isBundleBuild
        }
    }
}
```

  </TabItem>
  <TabItem groupId="language" value="groovy" label="Groovy DSL">

```groovy
android {
    def isBundleBuild = gradle.startParameter.taskNames.any { it.toLowerCase().contains("bundle") }
    splits {
        abi {
            enable !isBundleBuild
        }
    }
}
```

  </TabItem>
</Tabs>

و تادا، همه چی دوباره مثل قبل داره کار می‌کنه 😄 خیلی دوست داشتم که هر وقت مشکل رو حل کردن همینجا بگم، اما ظاهرا گوگل قصد
نداره این مشکل رو حل کنه، چون خیلی وقته که از خروجی‌های APK پشتیبانی نمی‌کنه.
