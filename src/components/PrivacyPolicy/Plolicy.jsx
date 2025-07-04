import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Policy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-10">
      <div className="max-w-[1000px] w-[95%] mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg">
        {/* Navigation Header */}
        <div className="flex justify-between items-start mb-8">
          <Link to="/sign-in" legacyBehavior>
            <a className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow transition-all duration-200 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Sign In
            </a>
          </Link>
        <Logo/>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Last updated: June 27, 2025 | Effective as of January 1, 2023
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#introduction"
                className="text-purple-600 hover:underline"
              >
                1.0 Introduction
              </a>
            </li>
            <li>
              <a
                href="#definitions"
                className="text-purple-600 hover:underline"
              >
                2.0 Definitions
              </a>
            </li>
            <li>
              <a
                href="#statement-details"
                className="text-purple-600 hover:underline"
              >
                3.0 Statement Details
              </a>
            </li>
            <li>
              <a
                href="#use-of-info"
                className="text-purple-600 hover:underline"
              >
                3.1 Use of Personal Information
              </a>
            </li>
            <li>
              <a
                href="#lawful-basis"
                className="text-purple-600 hover:underline"
              >
                3.2 Lawful Basis for Processing
              </a>
            </li>
            <li>
              <a href="#retention" className="text-purple-600 hover:underline">
                3.3 Retention of Information
              </a>
            </li>
            <li>
              <a href="#disclosure" className="text-purple-600 hover:underline">
                4.0 Disclosure of Information
              </a>
            </li>
            <li>
              <a href="#cookies" className="text-purple-600 hover:underline">
                5.0 Use of Cookies
              </a>
            </li>
            <li>
              <a href="#hyperlinks" className="text-purple-600 hover:underline">
                6.0 Use of Hyperlinks
              </a>
            </li>
            <li>
              <a
                href="#safeguarding"
                className="text-purple-600 hover:underline"
              >
                7.0 Safeguarding Information
              </a>
            </li>
            <li>
              <a href="#sharing" className="text-purple-600 hover:underline">
                8.0 Sharing Personal Information
              </a>
            </li>
            <li>
              <a
                href="#international"
                className="text-purple-600 hover:underline"
              >
                9.0 International Data Transfers
              </a>
            </li>
            <li>
              <a href="#rights" className="text-purple-600 hover:underline">
                10.0 Your Rights
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              1.0 Introduction
            </h2>
            <p className="mb-4">
              We are committed to the privacy and confidentiality of information
              provided to us. This Privacy Statement provides information to
              help you understand how we collect, use, and share your personal
              information and our privacy practices with regard to any personal
              information collected by us from you directly and/or through the
              Website or the use of our products and services.
            </p>
            <p>
              By using HekoPay&apos;s website, web, and mobile applications, you
              indicate that you understand and agree to this Privacy Statement.
              This statement should be read together with the Terms and
              Conditions of Use for other HekoPay products and services. Where
              there is a conflict, this statement will prevail.
            </p>
          </section>

          {/* Definitions */}
          <section id="definitions" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              2.0 Definitions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  2.1 &quot;You&quot; means:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Customer - the person who subscribes to, uses, or purchases
                    any of our products and services or accesses our websites
                    and includes any person who accesses any of the products and
                    services you have subscribed to.
                  </li>
                  <li>
                    Any agent, dealer, and/or merchant who has signed an
                    agreement with the local market and is recognized as a
                    merchant or agent in accordance with any applicable laws or
                    regulations.
                  </li>
                  <li>
                    Any visitor that is a person (including
                    contractors/subcontractors or any third parties) who gains
                    access to any HekoPay premises.
                  </li>
                  <li>
                    Employees and contractors who gain access to any of our
                    HekoPay premises as well as interact with HekoPay&apos;s
                    products and services.
                  </li>
                  <li>
                    Any supplier who has been contracted by HekoPay and executed
                    a supplier contract.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  2.2 &quot;HekoPay&quot;, &quot;we&quot; or &quot;us&quot;,
                  &quot;our&quot; and &quot;ours&quot; means:
                </h3>
                <p>HekoPay Ltd and includes its affiliates.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  2.3 &quot;Data subject&quot;
                </h3>
                <p>
                  Refers to any living individual whose personal data is
                  collected, held, or processed by an organization.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  2.4 &quot;Data Controller&quot;
                </h3>
                <p>
                  Refers to a person, company, or other body that determines the
                  purpose and means of personal data processing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  2.5 &quot;Personal data&quot;
                </h3>
                <p>
                  Refers to any information related to an identified or
                  identifiable natural person. It can reference an identifier
                  such as a name, an identification number, location data, an
                  online identifier, or one of several special characteristics,
                  which expresses the physical, physiological, genetic, mental
                  health, commercial, cultural, or social identity of these
                  natural persons. In practice, these also include all data
                  which are or can be assigned to a person in any kind of way.
                  For example, the telephone, credit card, or personnel number
                  of a person, account data, appearance, customer number, or
                  address are all personal data.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  2.6 &quot;Processing&quot;
                </h3>
                <p>
                  Personal data may include collecting, recording, organizing,
                  structuring, storing, modifying, consulting, using,
                  publishing, combining, erasing, and destroying data.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  2.7 A &quot;Customer&quot;
                </h3>
                <p>
                  Is a reference to past, current, or prospective HekoPay
                  customers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  2.8 A &quot;Supplier&quot;
                </h3>
                <p>
                  Is a third party, vendor, contractor, or organization that is
                  either a data processor or data controller and in a business
                  relationship with HekoPay Limited.
                </p>
              </div>
            </div>
          </section>

          {/* Statement Details */}
          <section id="statement-details" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              3.0 Statement Details
            </h2>
            <p className="mb-4">HekoPay Limited agrees to:</p>
            <ul className="list-decimal pl-6 space-y-3">
              <li>
                <strong>3.3.1</strong> Comply with the requirements of the
                Services Agreement in the provision of services to the Data
                Controller;
              </li>
              <li>
                <strong>3.3.2</strong> Process and use the personal data only to
                the extent strictly necessary to perform its obligations or as
                otherwise stated in the Service Agreement;
              </li>
              <li>
                <strong>3.3.3</strong> Only disclose the personal data to the
                Data Processor&apos;s employees and personnel that have a need
                to access the Data for the Data Processor&apos;s compliance,
                while the Data Processor shall ensure that all such employees
                and personnel are bound by a confidentiality agreement;
              </li>
              <li>
                <strong>3.3.4</strong> Take all reasonable steps to ensure the
                reliability of all its employees and personnel who have access
                to the Data;
              </li>
              <li>
                <strong>3.3.5</strong> Implement, maintain, and operate adequate
                and appropriate technical and organizational measures to:
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    Protect the security, confidentiality, integrity, and
                    availability of the Data, and
                  </li>
                  <li>
                    Protect against unauthorized or unlawful processing of the
                    Data and against accidental loss, destruction, or the making
                    vulnerable of, or damage to, the Data;
                  </li>
                </ul>
              </li>
              <li>
                <strong>3.3.6</strong> Comply with its obligations under Data
                Protection Law and shall take such steps as are requested by the
                Data Controller to enable the Data Controller to comply with the
                Data Controller&apos;s obligations under Data Protection Law.
              </li>
            </ul>
          </section>

          {/* Use of Personal Information */}
          <section id="use-of-info" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              3.1 Use of Personal Information
            </h2>
            <p className="mb-4">
              We may use and analyze your information for the following
              purposes:
            </p>
            <ul className="list-decimal pl-6 space-y-3">
              <li>
                <strong>3.1.1</strong> Responding to any of your queries or
                concerns;
              </li>
              <li>
                <strong>3.1.2</strong> Carrying out credit checks and credit
                scoring;
              </li>
              <li>
                <strong>3.1.3</strong> To comply with any legal, governmental,
                or regulatory requirement or for use by our lawyers in
                connection with any legal proceedings;
              </li>
              <li>
                <strong>3.1.4</strong> In business practices, including quality
                control, training, and ensuring effective systems operations;
              </li>
              <li>
                <strong>3.1.5</strong> Manage risk, or to detect, prevent,
                and/or remediate fraud or other potentially prohibited or
                illegal activities;
              </li>
              <li>
                <strong>3.1.6</strong> Detect, prevent, or remediate violations
                of policies or applicable Terms of Use;
              </li>
              <li>
                <strong>3.1.7</strong> Market research, data science,
                statistical and analytical purposes, surveys, and other
                scientific or business purposes;
              </li>
              <li>
                <strong>3.1.8</strong> Provide aggregated data (which do not
                contain any information that may identify you as an individual)
                to third parties for research and scientific purposes;
              </li>
              <li>
                <strong>3.1.9</strong> Your information may also be used for
                other purposes for which you give your permission or where the
                law allows us to use it;
              </li>
              <li>
                <strong>3.1.10</strong> Administer any of our online
                platforms/websites.
              </li>
            </ul>
            <p className="mt-4">
              We aim to only process personal information in a manner that is
              adequate, relevant, and not excessive, considering our purposes of
              use.
            </p>
          </section>

          {/* Lawful Basis */}
          <section id="lawful-basis" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              3.2 Lawful Basis for Processing Your Information
            </h2>
            <p className="mb-4">
              We will process your personal information based on any of the
              lawful bases provided for under the Data Protection Law:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>3.2.1</strong> The performance of a Product/Service
                Agreement with you/contract;
              </li>
              <li>
                <strong>3.2.2</strong> HekoPay&apos;s legitimate business
                interests;
              </li>
              <li>
                <strong>3.2.3</strong> Compliance with a mandatory legal
                obligation;
              </li>
              <li>
                <strong>3.2.4</strong> Consent you provide;
              </li>
              <li>
                <strong>3.2.5</strong> Public interest/task;
              </li>
              <li>
                <strong>3.2.6</strong> Your vital interests.
              </li>
            </ul>
          </section>

          {/* Retention */}
          <section id="retention" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              3.3 Retention of Information
            </h2>
            <p className="mb-4">
              We will only retain your personal data for as long as reasonably
              necessary to fulfill the purposes we collected it for, including
              for the purposes of satisfying any legal, regulatory, tax,
              accounting, or reporting requirements. We may retain your personal
              data for a longer period in the event of a complaint or if we
              reasonably believe there is a prospect of litigation in respect to
              our relationship with you.
            </p>
            <p className="mb-4">
              To determine the appropriate retention period for personal data,
              we consider the amount, nature, and sensitivity of the personal
              data, the potential risk of harm from unauthorized use or
              disclosure of your personal data, the purposes for which we
              process your personal data, and whether we can achieve those
              purposes through other means, the need to comply with our internal
              policy, and the applicable legal, regulatory, tax, accounting, or
              other requirements.
            </p>
            <p>
              Anonymized information that can no longer be associated with you
              may be held indefinitely.
            </p>
          </section>

          {/* Disclosure */}
          <section id="disclosure" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              4.0 Disclosure of Information
            </h2>
            <p className="mb-4">
              Any disclosure of your information shall be in accordance with
              applicable laws and regulations. HekoPay shall assess and review
              each application for information and may decline to grant such
              information to the requesting party.
            </p>
            <p className="mb-4">
              We will share information with them on a need-to-know basis and
              subject to a contract to maintain the security of your personal
              information and to use it for our specified purposes only.
            </p>
            <p>
              We will get your express consent before we share your personal
              data with any third party for direct marketing purposes.
            </p>
          </section>

          {/* Cookies */}
          <section id="cookies" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              5.0 The Use of Cookies
            </h2>
            <div className="space-y-4">
              <p>
                <strong>5.1</strong> We may store some information (using
                &quot;cookies&quot;) on your computer when you visit our
                website. This enables us to recognize you during subsequent
                visits. The type of information gathered is non-personal (such
                as: The Internet Protocol (IP) address of your computer, the
                date and time of your visit, which pages you browsed, and
                whether the pages have been delivered successfully.
              </p>
              <p>
                <strong>5.2</strong> We may also use this data in aggregate form
                to develop customized services - tailored to your individual
                interests and needs. Should you choose to do so, it is possible
                (depending on the browser you are using) to be prompted before
                accepting any cookies or to prevent your browser from accepting
                any cookies at all. This will, however, cause certain features
                of the website not to be accessible.
              </p>
            </div>
          </section>

          {/* Hyperlinks */}
          <section id="hyperlinks" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              6.0 The Use of Hyperlinks
            </h2>
            <div className="space-y-4">
              <p>
                <strong>6.1</strong> Our websites may provide hyperlinks to
                other locations or websites on the Internet. These hyperlinks
                lead to websites published or operated by third parties who are
                not affiliated with or in any way related to us and have been
                included in our website to enhance your user experience and are
                presented for information purposes only.
              </p>
              <p>
                <strong>6.2</strong> We do not endorse, recommend, approve, or
                guarantee any third-party products and services by providing
                hyperlinks to an external website or webpage and do not have any
                co-operation with such third parties unless otherwise disclosed.
                We are not in any way responsible for the content of any
                externally linked website or webpage.
              </p>
              <p>
                <strong>6.3</strong> By clicking on a hyperlink, you will leave
                the HekoPay webpage and accordingly, you shall be subject to the
                terms of use, privacy, and cookie policies of the other website
                that you choose to visit.
              </p>
            </div>
          </section>

          {/* Safeguarding */}
          <section id="safeguarding" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              7.0 Safeguarding and Protection of Information
            </h2>
            <p className="mb-4">
              HekoPay has put in place technical and operational measures to
              ensure the integrity and confidentiality of your data via controls
              such as: information classification, access control, cryptography,
              physical and environmental security, and monitoring and
              compliance, among others.
            </p>
            <p className="mb-4">
              At HekoPay, security is our highest priority. We design our
              systems with your security and privacy in mind.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We maintain a wide variety of compliance programs that validate
                our security controls.
              </li>
              <li>
                We protect the security of your information during transmission
                to or from HekoPay websites, applications, products, or services
                by using encryption protocols and software.
              </li>
              <li>
                We maintain physical, electronic, and procedural safeguards in
                connection with the collection, storage, and disclosure of
                personal information. Our security procedures mean that we may
                request proof of identity before we disclose personal
                information to you.
              </li>
            </ul>
          </section>

          {/* Sharing */}
          <section id="sharing" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              8.0 Sharing Your Personal Information
            </h2>
            <p className="mb-4">We may share information about you with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Partners or agents involved in delivering the products and
                services you&apos;ve ordered or used.
              </li>
              <li>
                Partners or agents that conduct performance and customer
                satisfaction surveys and any other surveys related to the
                products or services provided to you.
              </li>
              <li>
                Companies who are engaged to perform services for, on behalf of
                HekoPay.
              </li>
              <li>
                Where applicable, credit reference, fraud prevention, or
                business scoring agencies, or other credit scoring agencies.
              </li>
              <li>
                Debt collection agencies or other debt recovery organizations.
              </li>
              <li>
                Law enforcement agencies, regulatory organizations, courts, or
                other public authorities if we have to, or are authorized to by
                law.
              </li>
              <li>
                We&apos;ll release information if it&apos;s reasonable for the
                purpose of protecting us against fraud, defending our rights or
                property, or to protect the interests of our customers.
              </li>
              <li>
                If we&apos;re reorganized or sold to another organization, we
                may transfer any personal information we hold about you to that
                organization.
              </li>
            </ul>
            <p className="mb-4">
              At your option, and only with your consent, we may also share your
              information with partner organizations we&apos;ve chosen
              carefully, so they can contact you about their products and
              services.
            </p>
            <p className="mb-4">
              We may share, transfer, or disclose the information in our
              databases and server logs to comply with a legal requirement, for
              the administration of justice, interacting with anti-fraud
              databases, to protect your vital interests, to protect the
              security or integrity of our databases or this website, to take
              precautions against legal liability, or in the event of our
              flotation on a stock exchange, sale, merger, reorganization,
              dissolution, disposal of all or part of our assets, or similar
              event. We will inform you of any such transfer or disclosure if we
              are required to do so by law.
            </p>
            <p className="mb-4">
              Where appropriate, before disclosing personal information to a
              third party, we contractually require the third party to take
              adequate precautions to protect that data and to comply with
              applicable law.
            </p>
            <p>
              In the event of a merger/acquisition or company reorganization,
              your personal information may be part of the transferred assets
              and are likely to be disclosed to the new company.
            </p>
          </section>

          {/* International */}
          <section id="international" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              9.0 International Data Transfers
            </h2>
            <p className="mb-4">
              Where we send your information outside Kenya, we will make sure
              that your information is properly protected in accordance with the
              applicable Data Protection Laws.
            </p>
            <p>
              We will only share information cross-border or transborder to
              recipients who have laws similar to the applicable laws or who
              have entered into an agreement with us to include the relevant
              principles prescribed by the applicable legislation.
            </p>
          </section>

          {/* Rights */}
          <section id="rights" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              10.0 Your Rights
            </h2>
            <p className="mb-4">
              Subject to legal and contractual exceptions, HekoPay will assist
              when needed to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Right to be informed that we are collecting personal data about
                you;
              </li>
              <li>
                Right to access personal data that we hold about you and request
                information about how we process it;
              </li>
              <li>
                Right to request that we correct your personal data where it is
                inaccurate or incomplete;
              </li>
              <li>
                Right to request that we erase your personal data, noting that
                we may continue to retain your information if obligated by the
                law or entitled to do so;
              </li>
              <li>
                Right to object and withdraw your consent to the processing of
                your personal data. We may continue to process if we have a
                legitimate or legal reason to do so;
              </li>
              <li>
                Right to request restricted processing of your personal data,
                noting that we may be entitled or legally obligated to continue
                processing your data and refuse your request;
              </li>
              <li>
                Right to request the transfer of your personal data in an
                electronic format.
              </li>
            </ul>
            <p>
              If you wish to exercise any of these rights, please contact us at
              privacy@hekopay.com.
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-14 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-600 mt-0.5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Email: privacy@hekopay.com</span>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-600 mt-0.5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Address: HekoPay Ltd, 123 Security Lane, Nairobi, Kenya
              </span>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-600 mt-0.5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Phone: +254 700 123 456</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
         <Logo/>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} HekoPay Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
