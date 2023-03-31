import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StepTwoFour = () => (
  <Layout>
    <div className="Card">
      <div className="Card__Content">
        <div className="Card__ContentTextCtr">
          <div className="Card__ContentTitleCtr">
            <h1 className="Card__ContentTitle">
              Know your product | <span>Functions & Specs</span>
            </h1>
            <Link to="/step1" className="Button__Outlined" >See instructions again</Link>
          </div>
          <span className="Card__Divider" />
          <p className="Card__ContentText">
            <strong>Congratulations!</strong> Please review all the specs of your new & successfully installed <strong>Protege 8.0 & 9.0</strong>
          </p>
          <div className="Card__Image">
            <StaticImage
              src="../images/Product8.png"
              loading="eager"
              width={566}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Step 1" />

export default StepTwoFour
