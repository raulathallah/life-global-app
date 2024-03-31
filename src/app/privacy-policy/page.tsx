import { Text } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <div className="grid gap-8 m-8 p-8">
      <Text className="font-bold text-5xl text-center"> Privacy Policy</Text>
      <div className="flex flex-col gap-1">
        <Text>
          At Life Global, accessible from lifeglobal.com, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by life global and how we use it.
        </Text>
        <Text>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <Text className="text-2xl">Log Files</Text>
        <Text>
          Life Global follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users movement on the website, and gathering demographic
          information. Our Privacy Policy was created with the help of the{" "}
          <a href="https://www.privacypolicyonline.com/privacy-policy-generator">
            Privacy Policy Generator
          </a>
          .
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <Text className="text-2xl">Cookies and Web Beacons</Text>
        <Text>
          Like any other website, Life Global uses cookies. These cookies are
          used to store information including visitors preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users experience by customizing
          our web page content based on visitors browser type and/or other
          information.
        </Text>
        <Text>
          For more general information on cookies, please read{" "}
          <a href="https://www.privacypolicyonline.com/what-are-cookies/">
            the cookies article from the Privacy Policy Generator
          </a>
          .
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <Text className="text-2xl">Google DoubleClick DART Cookie</Text>
        <Text>
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.website.com and other sites on the
          internet. However, visitors may choose to decline the use of DART
          cookies by visiting the Google ad and content network Privacy Policy
          at the following URL –{" "}
          <a href="https://policies.google.com/technologies/ads">
            https://policies.google.com/technologies/ads
          </a>
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <Text className="text-2xl">Our Advertising Partners</Text>
        <Text>
          Some of advertisers on our site may use cookies and web beacons. Our
          advertising partners are listed below. Each of our advertising
          partners has their own Privacy Policy for their policies on user data.
          For easier access, we hyperlinked to their Privacy Policies below.
        </Text>
      </div>
    </div>
  );
}
