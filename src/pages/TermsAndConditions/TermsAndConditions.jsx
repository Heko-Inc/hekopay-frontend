import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";


export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-10">
      <div className="max-w-[1200px] mx-auto bg-white p-6 md:p-8 rounded-sm shadow-lg">
    
        <div className="flex justify-between items-start mb-8">
          <Link to="/sign-in" legacyBehavior>
            <a className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-sm shadow transition-all duration-200 flex items-center">
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
            Terms and Conditions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Last updated: June 27, 2025 | Effective as of January 1, 2023
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-purple-50 rounded-lg p-6 mb-10 border border-purple-200">
          <p className="mb-4">
            This agreement together with the annexures hereto (together
            &quot;the Agreement&quot;) contains the complete terms and
            conditions that apply to Client&apos;s participation in
            HekoPay&apos;s mobile payment system (hereinafter Business to
            Business (B2B) Services) and supersedes all other agreements entered
            into between the Client and HekoPay in relation to the provision of
            HekoPay B2B Services.
          </p>
          <p>
            By executing this document the Client agrees that it is
            affirmatively stating that it has carefully read and understood the
            terms and conditions set forth herein and agrees to be bound by the
            said terms and conditions.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#definitions"
                    className="text-purple-600 hover:underline"
                  >
                    1. Definitions and Interpretation
                  </a>
                </li>
                <li>
                  <a
                    href="#duration"
                    className="text-purple-600 hover:underline"
                  >
                    2. Duration of Agreement
                  </a>
                </li>
                <li>
                  <a
                    href="#activation"
                    className="text-purple-600 hover:underline"
                  >
                    3. Activation of Business Account
                  </a>
                </li>
                <li>
                  <a
                    href="#operation"
                    className="text-purple-600 hover:underline"
                  >
                    4. Operation and Scope
                  </a>
                </li>
                <li>
                  <a href="#fees" className="text-purple-600 hover:underline">
                    5. Service Fees
                  </a>
                </li>
                <li>
                  <a
                    href="#confidentiality"
                    className="text-purple-600 hover:underline"
                  >
                    6. Confidentiality
                  </a>
                </li>
                <li>
                  <a
                    href="#purpose"
                    className="text-purple-600 hover:underline"
                  >
                    7. Permissible Purpose & Prohibited Usage
                  </a>
                </li>
                <li>
                  <a
                    href="#liability"
                    className="text-purple-600 hover:underline"
                  >
                    8. Indemnity & Limitation of Liability
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#suspension"
                    className="text-purple-600 hover:underline"
                  >
                    9. Suspension
                  </a>
                </li>
                <li>
                  <a
                    href="#termination"
                    className="text-purple-600 hover:underline"
                  >
                    10. Termination
                  </a>
                </li>
                <li>
                  <a href="#taxes" className="text-purple-600 hover:underline">
                    11. Taxes
                  </a>
                </li>
                <li>
                  <a
                    href="#general"
                    className="text-purple-600 hover:underline"
                  >
                    12. General
                  </a>
                </li>
                <li>
                  <a
                    href="#governance"
                    className="text-purple-600 hover:underline"
                  >
                    13. Governing Law and Jurisdiction
                  </a>
                </li>
                <li>
                  <a
                    href="#disputes"
                    className="text-purple-600 hover:underline"
                  >
                    14. Dispute Resolution
                  </a>
                </li>
                <li>
                  <a
                    href="#agreement"
                    className="text-purple-600 hover:underline"
                  >
                    15. Entire Agreement
                  </a>
                </li>
                <li>
                  <a href="#misc" className="text-purple-600 hover:underline">
                    16-24. Miscellaneous
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {/* Definitions */}
          <section id="definitions" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              1. Definitions and Interpretation
            </h2>
            <p className="mb-4">
              In this Agreement, unless the context otherwise requires, the
              following words and expressions shall have the following meanings:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 text-left border-b">Term</th>
                    <th className="py-2 px-4 text-left border-b">Definition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b font-medium">Cash</td>
                    <td className="py-3 px-4 border-b">
                      Currency notes and coins constituting the legal tender of
                      the Republic of Kenya which, when offered by the Client to
                      the Custodial Trustee, is held in trust for the Client by
                      the Custodial Trustee in a Trust Account and is
                      represented in the HekoPay system at par value as E-Money
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">
                      Custodial Trustee
                    </td>
                    <td className="py-3 px-4 border-b">
                      The HekoPay Holding Company Limited which holds in trust
                      for all HekoPay customers Cash paid into the Trust Account
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b font-medium">
                      Customer / Recipient
                    </td>
                    <td className="py-3 px-4 border-b">
                      A HekoPay business user who receives remittance from The
                      Client, for the purposes of B2B a HekoPay business user is
                      an organisation registered with HekoPay for a HekoPay
                      Paybill Account, HekoPay Buy Goods Account, Lipa na
                      HekoPay, or a HekoPay Bulk Payments (B2C) Account
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">E-Money</td>
                    <td className="py-3 px-4 border-b">
                      The electronic value issued by HekoPay which represents an
                      entitlement to an equivalent amount of the Cash held by
                      the Custodial Trustee in respect of the purchase of such
                      electronic value
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b font-medium">
                      Effective Date
                    </td>
                    <td className="py-3 px-4 border-b">
                      The date upon which the Client&apos;s HekoPay Account is
                      activated by HekoPay
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">
                      Intellectual Property Rights
                    </td>
                    <td className="py-3 px-4 border-b">
                      Each Party&apos;s proprietary rights, title and interest
                      in and to any and all names, logos, trade marks,
                      copyrights, patents and all other intellectual property
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b font-medium">
                      HekoPay Service
                    </td>
                    <td className="py-3 px-4 border-b">
                      The mobile money transfer service provided by HekoPay
                      through which the Client can make payments to Customers
                      under the Business to Business (B2B) functionality
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">
                      HekoPay B2B Account
                    </td>
                    <td className="py-3 px-4 border-b">
                      A HekoPay Bulk Payments (B2C) Account, a HekoPay Paybill
                      Account or a HekoPay Buy Goods Account/ Lipa na HekoPay
                      Account activated in accordance with clause 3
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b font-medium">
                      HekoPay B2B Interface
                    </td>
                    <td className="py-3 px-4 border-b">
                      The HekoPay B2B Application Programming Interface (API) or
                      the B2B application made available to the Client
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Network</td>
                    <td className="py-3 px-4 border-b">
                      The HekoPay Global System for Mobile Telecommunication
                      (GSM) system
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b font-medium">
                      Transaction
                    </td>
                    <td className="py-3 px-4 border-b">
                      Any movement of E-Money from the Client to Recipients or
                      any cash deposit or withdrawal made to or against the
                      Trust Account by the Client
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">
                      Trust Account
                    </td>
                    <td className="py-3 px-4 border-b">
                      The trust accounts held in commercial banks and maintained
                      by the Custodial Trustee comprising Cash entrusted to the
                      Custodial Trustee
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <p className="mb-4">
                In this Agreement (including the recitals), unless the context
                otherwise requires:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Words denoting the singular shall include the plural and vice
                  versa
                </li>
                <li>
                  References to clauses are references to the clauses of this
                  Agreement
                </li>
                <li>
                  References to &quot;Parties&quot; shall mean the parties to
                  this Agreement being HekoPay Limited and the Client
                </li>
                <li>
                  The expression &quot;person&quot; includes a natural person,
                  body corporate, unincorporated venture, trust, joint venture,
                  association, statutory corporation, state, state agency,
                  governmental authority or firm
                </li>
                <li>
                  Headings to clauses are used for convenience only and shall
                  not affect the construction and interpretation of this
                  Agreement
                </li>
              </ul>
            </div>
          </section>

          {/* Duration */}
          <section id="duration" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              2. Duration of Agreement
            </h2>
            <p className="mb-4">
              Subject to the provisions for earlier termination as provided in
              this Agreement, this Agreement shall be for a period of twelve
              (12) months (the Initial Term) from the Effective Date of this
              Agreement.
            </p>
            <p>
              Upon expiry of the Initial Term, this Agreement shall
              automatically renew for a further renewal period of twelve (12)
              months each (each period being a Renewal Term) on the terms and
              conditions appearing herein or as may be amended in writing unless
              terminated in accordance with the terms of this Agreement.
            </p>
          </section>

          {/* Activation */}
          <section id="activation" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              3. Activation of Business to Business Account
            </h2>
            <p className="mb-4">
              This Agreement comes into effect upon activation of the HekoPay
              B2B Account by HekoPay following KYC vetting procedures conducted
              on the Client by HekoPay.
            </p>
            <p className="mb-4">
              Prior to activation of the HekoPay B2B Account, the Client shall
              ensure it has provided HekoPay with the necessary Know Your
              Customer (KYC) documents as may be prescribed by HekoPay.
            </p>
            <p>
              If the client fails to produce the necessary KYC documents as set
              out in 3.2 above, or fails to satisfy the minimum KYC
              requirements, HekoPay will refuse to activate the HekoPay B2B
              Account and accordingly advise the client as such (in which case
              this agreement shall be null and void). For the avoidance of
              doubt, HekoPay&apos;s refusal to activate the HekoPay B2B Account
              shall neither confer on the Client any right to contest
              HekoPay&apos;s decision nor give rise to any legal claim against
              HekoPay under this agreement.
            </p>
          </section>

          {/* Operation */}
          <section id="operation" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              4. Operation and Scope
            </h2>
            <p className="mb-4">
              The Client hereby agrees to abide by the HekoPay operational
              procedures as may be prescribed by HekoPay from time to time.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Client Responsibilities:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Bank Cash in the Trust Account equivalent to the aggregate
                  amount of E-Money the Client wishes to remit to its Recipients
                  at any one time
                </li>
                <li>
                  Instruct HekoPay to make remittances from the Client&apos;s
                  HekoPay B2B Account to nominated Recipients through the
                  HekoPay B2B Interface
                </li>
                <li>
                  Take all reasonable steps to ensure that Customers receive the
                  gross amount of their payments without set off, counterclaim
                  or deduction of charges
                </li>
                <li>
                  Initiate and complete reversal Transactions within seventy two
                  (72) hours where payments are made to it manifestly in error
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                HekoPay Responsibilities:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Create the Client on the HekoPay System as an
                  &quot;Organization&quot;
                </li>
                <li>
                  Train the Client staff to enable them effectively perform
                  remittance transactions
                </li>
                <li>
                  Facilitate the Issuance of E-Money to the Client upon
                  confirmation of the value of Cash banked in the Trust Account
                </li>
              </ul>
            </div>

            <p className="mt-6">
              During the subsistence of this Agreement, the Client undertakes
              that it shall at all times comply with such reasonable guidelines
              as may be communicated to the Client by HekoPay in writing from
              time to time.
            </p>
          </section>

          {/* Fees */}
          <section id="fees" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              5. Service Fees
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                The Service shall be subject to the Charges and Transaction
                Values set out in Schedule 1 or as otherwise communicated by
                HekoPay to the Client
              </li>
              <li>
                HekoPay may by notice and from time to time vary the Charges and
                Transaction Values
              </li>
              <li>
                The Client shall pay all monies due to HekoPay without set off,
                counterclaim or deduction
              </li>
            </ul>
          </section>

          {/* Confidentiality */}
          <section id="confidentiality" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              6. Confidentiality
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Each party undertakes and warrants that it will treat as
                confidential all information related to and received from the
                other party, which it acquires as a result of the operation of
                this Agreement
              </li>
              <li>
                Neither party will reveal any confidential information of the
                other to any third party, without the express written consent of
                the disclosing party, except where such information is already
                in the public domain, has been legally acquired by the third
                party, or where disclosure of the confidential information is
                ordered by a court or other competent authority
              </li>
            </ul>
          </section>

          {/* Purpose */}
          <section id="purpose" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              7. Permissible Purpose & Prohibited Usage and Conduct
            </h2>
            <p className="mb-4">
              The Client hereby undertakes to use the HekoPay services only for
              the purpose set out in this agreement (i.e. the bulk payment of
              various payments to Customers) and shall not vary or modify the
              purpose without the prior written consent of HekoPay.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                The Client agrees not to use the HekoPay B2B Service to:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Conduct any business that is unlawful, harmful, threatening,
                  abusive, harassing, tortuous, defamatory, vulgar, obscene,
                  libellous, invasive of another&apos;s privacy, hateful, or
                  racially, ethnically or otherwise objectionable
                </li>
                <li>Impersonate any person or entity</li>
                <li>Forge headers or otherwise manipulate identifiers</li>
                <li>
                  Conduct any business that causes or permits the uploading of
                  content or information that you do not have a right to make
                  available
                </li>
                <li>
                  Conduct any business that infringes any patent, trademark,
                  trade secret, copyright or other proprietary rights
                </li>
                <li>
                  Conduct any business whether unsolicited or not, relating to
                  or remotely connected to SPAM, junk mail, pyramid schemes,
                  pornography, unlicensed gaming, unlicensed gambling or any
                  other form of solicitation
                </li>
                <li>
                  Conduct any business that causes or permits the uploading of
                  material that contains software viruses or any other computer
                  code, files or programs designed to interrupt, destroy or
                  limit the functionality of any computer software or hardware
                  or telecommunications equipment
                </li>
                <li>
                  Conduct any business that interferes with or disrupts the
                  Service, the Network or servers or networks connected to the
                  Service
                </li>
                <li>
                  Conduct any business that intentionally or unintentionally
                  violates any applicable local, or international law
                </li>
                <li>
                  Collect or store personal data about other users without their
                  express authority
                </li>
              </ul>
            </div>

            <p>
              It is hereby acknowledged and agreed that HekoPay may preserve the
              Client&apos;s Confidential Information and may also disclose the
              Client&apos;s Confidential Information if required to do so by law
              or in the good faith belief that such preservation or disclosure
              is reasonably necessary.
            </p>
          </section>

          {/* Liability */}
          <section id="liability" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              8. Indemnity & Limitation of Liability
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Client Indemnity:
                </h3>
                <p>
                  The Client shall indemnify HekoPay from and against any and
                  all loss, damage or liability resulting from a material breach
                  of this Agreement by The Client including breaches caused by
                  any act, neglect or default of The Client or any third party
                  claim.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  HekoPay Indemnity:
                </h3>
                <p>
                  Subject to the provisions of this Clause, HekoPay shall
                  indemnify the Client from and against any and all loss, damage
                  or liability resulting from a material breach of this
                  Agreement by HekoPay.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Exclusions:
                </h3>
                <p>
                  HekoPay specifically excludes liability from any loss or
                  damage arising in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Where the transaction amount requested by The Client is
                    below the minimum or above the maximum limits for
                    transactions
                  </li>
                  <li>
                    Where the Client has entered an incorrect Recipient&apos;s
                    Business Account number
                  </li>
                  <li>
                    Where the Client has exceeded transaction/daily or monthly
                    or annual limits
                  </li>
                  <li>
                    Where the Recipient&apos;s Business Account is not active
                  </li>
                  <li>
                    Where the Client&apos;s hardware, software or internet
                    service provider&apos;s service is not functioning properly
                  </li>
                  <li>
                    Where unforeseen circumstances prevent the execution of a
                    Transaction despite reasonable precautions being taken by
                    HekoPay
                  </li>
                  <li>
                    Where such damage is indirect, special or consequential in
                    nature
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Liability Cap:
                </h3>
                <p>
                  HekoPay&apos;s maximum aggregate liability for all claims
                  howsoever arising whether in contract or tort related to this
                  Agreement shall be limited to Kenya Shillings One Million
                  Only.
                </p>
              </div>
            </div>
          </section>

          {/* Suspension */}
          <section id="suspension" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              9. Suspension
            </h2>
            <p>
              HekoPay may suspend the availability of the Service wholly or
              partially for any valid or compelling reason, including without
              limitation, where (i) HekoPay needs to investigate a transaction
              or series of transaction that is or are suspicious or fraudulent;
              or (ii) continuing to offer the service availability will render
              HekoPay non-compliant with any law, regulation or directive from a
              competent regulatory authority. In such cases HekoPay shall return
              any unremitted sum of money paid in advance by the Client as per
              this Agreement.
            </p>
          </section>

          {/* Termination */}
          <section id="termination" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              10. Termination
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Termination for Breach:
                </h3>
                <p>
                  If either of the Parties commits a breach of any material
                  obligation imposed on it in terms of this Agreement
                  (Defaulting Party), and fails to remedy such breach within a
                  period of 30 (thirty) days from the date on which written
                  notice is given to the Defaulting Party by the other Party
                  (Aggrieved Party) requiring the Defaulting Party to remedy the
                  breach, then the Aggrieved Party shall be entitled to
                  terminate this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Termination by Notice:
                </h3>
                <p>
                  Notwithstanding the generality of the foregoing, either Party
                  may terminate this Agreement upon giving the other Party
                  thirty (30) days notice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Termination not to Affect Remedies:
                </h3>
                <p>
                  The expiration or termination of this Agreement shall be
                  without prejudice to all accrued rights and obligations of the
                  Parties under this Agreement and to all obligations under this
                  Agreement expressed to continue or take effect after
                  expiration or termination.
                </p>
              </div>
            </div>
          </section>

          {/* Taxes */}
          <section id="taxes" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              11. Taxes
            </h2>
            <p>
              Any taxes, charges, impositions or levies imposed on a Party or on
              a Party&apos;s performance of its obligations under this Agreement
              shall be paid by that Party. If any withholding or other tax
              reduces the amount that would otherwise be paid hereunder by a
              Party to any other Party or any Recipient, then the amount paid
              shall be net of such required withholding or other tax so that the
              burden of the tax is borne by the Party subject to the tax.
              Nothing in this Clause shall be interpreted to require any Party
              to bear any income taxes which under applicable laws is imposed
              upon Recipients.
            </p>
          </section>

          {/* General */}
          <section id="general" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              12. General
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                The Client shall comply with all legal requirements applicable
                to its role in effecting Transactions
              </li>
              <li>
                Each of the Parties represent and warrant that none of its
                officers or directors has ever been convicted of any crime or
                charged with crimes relating to fraud, embezzlement, theft,
                money laundering, etc.
              </li>
              <li>
                Legal or regulatory requirements may require HekoPay to obtain
                and report certain information about the operation of the
                Client&apos;s account
              </li>
              <li>
                Neither party shall at any time publish or cause to be published
                any information concerning this Agreement without the express
                written permission of the other party
              </li>
              <li>
                Each party shall, at its expense, obtain and renew all permits,
                licences and authorisations required for the performance of its
                obligations under this Agreement
              </li>
              <li>
                Each party undertakes to indemnify and keep the other Party
                indemnified on demand for and against all proceedings, costs,
                claims, damages, expenses and liabilities arising from any
                breach or non-compliance with any terms of this Agreement
              </li>
            </ul>
          </section>

          {/* Governance */}
          <section id="governance" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              13. Governing Law and Jurisdiction
            </h2>
            <p>
              The validity, construction and interpretation of this Agreement
              and the rights and duties of the parties hereto shall be governed
              by the laws of Kenya and the parties hereby submit to the
              non-exclusive jurisdiction of the High Court of Kenya.
            </p>
          </section>

          {/* Disputes */}
          <section id="disputes" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              14. Dispute Resolution
            </h2>
            <p>
              In the event that any dispute has arisen and the parties have not
              been able to settle the same, within fourteen (14) days then, any
              party may elect to commence arbitration. Such arbitration shall be
              referred to arbitration by a single arbitrator to be appointed by
              agreement between the Parties or in default of such agreement
              within 14 days of the notification of a dispute, upon the
              application of either Party, by the Chairman for the time being of
              the Kenya Branch of the Chartered Institute of Arbitration of the
              United Kingdom. Such arbitration shall be conducted in Nairobi in
              accordance with the Rules of Arbitration of the said Institute and
              subject to and in accordance with the provisions of the
              Arbitration Act 1995. To the extent permissible by Law, the
              determination of the Arbitrator shall be final, conclusive and
              binding upon the Parties hereto. Pending final settlement or
              determination of a dispute, the Parties shall continue to perform
              their subsisting obligations hereunder. Nothing in this Agreement
              shall prevent or delay a Party seeking urgent injunctive or
              interlocutory relief in a court having jurisdiction.
            </p>
          </section>

          {/* Entire Agreement */}
          <section id="agreement" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              15. Entire Agreement
            </h2>
            <p>
              This Agreement, together with the schedules hereto, constitutes
              the entire agreement between the Client and HekoPay with respect
              to the subject matter hereof. There are no restrictions, promises,
              warranties, covenants or undertakings other than those expressly
              set forth herein and therein. This Agreement supersedes all prior
              negotiations, agreements, and undertakings between the parties
              with respect to such matter.
            </p>
          </section>

          {/* Miscellaneous */}
          <section id="misc" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              16-24. Miscellaneous Provisions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  16. Amendment
                </h3>
                <p>
                  This Agreement, including its schedules may be amended by
                  HekoPay by way of bulletin, and notices. You acknowledge that
                  such bulletin or notices shall be binding and shall have full
                  legal force as if they were contained in this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  17. Assignment
                </h3>
                <p>
                  This Agreement may not be assigned by either party, by
                  operation of law or otherwise, without the prior written
                  consent of the other party.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  18. Notices
                </h3>
                <p>
                  Except as otherwise specified in the Agreement, all notices,
                  requests, approvals, consents and other communications
                  required or permitted under this Agreement shall be in writing
                  and shall be personally delivered or sent by mail, registered
                  or certified, return receipt requested, postage pre-paid,
                  courier service to the address specified.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  19. Counterparts
                </h3>
                <p>
                  This Agreement may be executed simultaneously in three
                  counterparts, each of which shall be deemed an original, but
                  all of which together constitute one and the same agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  20. Waiver
                </h3>
                <p>
                  No delay or omission by either party to exercise any right or
                  power it has under this Agreement shall impair or be construed
                  as a waiver of such right or power. A waiver by any party of
                  any breach or covenant shall not be construed to be a waiver
                  of any succeeding breach or any other covenant. All waivers
                  must be in writing and signed by the party waiving its rights.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  21. Severability
                </h3>
                <p>
                  If any provision of this Agreement is held by court or
                  arbitrator of competent jurisdiction to be contrary to law,
                  such provision shall be severed from this Agreement PROVIDED
                  ALWAYS that the remaining provisions of this Agreement will
                  remain in full force and effect. The rights and obligations of
                  the parties under this Agreement shall survive the expiration
                  or early termination of this Agreement for any reason.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  22. Publicity
                </h3>
                <p>
                  Neither party shall use the other party&apos;s name or
                  trademark or refer to the other party directly or indirectly
                  in any media release, public announcement or public disclosure
                  relating to this Agreement or its subject matter, in any
                  promotional or marketing materials, lists or business
                  presentations, without consent from the other party.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  23. No Third Party Beneficiaries
                </h3>
                <p>
                  Each party intends that this Agreement shall not benefit, or
                  create any right or cause of action in or on behalf of, any
                  person or entity other than HekoPay and the Client.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  24. Force Majeure
                </h3>
                <p>
                  Notwithstanding any provision contained in this Agreement,
                  neither party shall be liable to the other to the extent
                  fulfilment or performance if any terms or provisions of this
                  Agreement is delayed or prevented by revolution or other civil
                  disorders; wars; acts of enemies; strikes; lack of available
                  resources from persons other than parties to this Agreement;
                  labour disputes; electrical equipment or availability failure;
                  fires; floods; acts of God; government or regulator action;
                  or, without limiting the foregoing, any other causes not
                  within its control, and which by the exercise of reasonable
                  diligence it is unable to prevent. If any force majeure event
                  occurs, the affected party will give prompt written notice to
                  the other party and will use commercially reasonable efforts
                  to minimize the impact of such event.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Acceptance Section */}
        <div className="mt-14 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Acceptance of Terms
          </h2>
          <p className="mb-4">
            We ____________________ Limited Hereby confirm that we have read the
            terms of these HekoPay Business to Business (B2B) Contract Terms and
            Conditions and we hereby agree to be bound by them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border-t border-gray-300 pt-4">
              <p className="font-medium">
                For and on behalf of HekoPay Limited:
              </p>
              <div className="mt-6">
                <p className="border-b border-gray-300 pb-1 mb-2">Signature</p>
                <p className="border-b border-gray-300 pb-1 mb-2">Name</p>
                <p className="border-b border-gray-300 pb-1 mb-2">Title</p>
                <p className="border-b border-gray-300 pb-1 mb-2">Date</p>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4">
              <p className="font-medium">For and on behalf of [Client Name]:</p>
              <div className="mt-6">
                <p className="border-b border-gray-300 pb-1 mb-2">Signature</p>
                <p className="border-b border-gray-300 pb-1 mb-2">Name</p>
                <p className="border-b border-gray-300 pb-1 mb-2">Title</p>
                <p className="border-b border-gray-300 pb-1 mb-2">Date</p>
              </div>
            </div>
          </div>
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
