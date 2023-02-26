import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Card">
      <div className="Card__Content">
        <div className="Card__ContentTextCtr">
          <p className="Card__ContentText">
            <strong>Congratulations!</strong> and thank you for your purchase of the <strong>Planet Bike Protege Bicycle Computer.</strong>
          </p>
          <p className="Card__ContentText">
            The Protege represents a breakthrough in bicycle computer design and function. <strong>The MacroMonitor™ LCD display. "buttonless"</strong> design, and overall compact size offer advantages to you the cyclist that no other computer can match.
            In addition, Planet Bike will donate <strong>25% of our profits</strong> from this purchases and any other Planet Bike product you buy, to non profit bicycle advocacy groups to further benefit your cycling experience. 
            Enjoy your new <strong>Protege Bicycle Computer</strong> and thank you for making a difference!
          </p>
          <p className="Card__ContentText">
            In addition, Planet Bike will donate <strong>25% of our profits</strong> from this purchases and any other Planet Bike product you buy, to non profit bicycle advocacy groups to further benefit your cycling experience. 
            Enjoy your new <strong>Protege Bicycle Computer</strong> and thank you for making a difference!
          </p>
          <p className="Card__ContentText">
            Enjoy your new <strong>Protege Bicycle Computer</strong> and thank you for making a difference!
          </p>
        </div>
        <div className="Card__Image">
          <StaticImage
            src="../images/p9.jpg"
            loading="eager"
            width={307}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
      </div>
      <div className="Buttons">
          <Link to="/" className="Button__Outlined" >Donwnload PDF</Link>
          <Link to="/step1" className="Button">See instructions manual</Link>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
