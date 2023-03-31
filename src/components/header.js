import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="Header__TextCtr">
      <StaticImage
        src="../images/Logo.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <p className="Header__Title"><strong>| </strong> Protege 8.0 & 9.0 Instructions</p>
    </div>
    <StaticImage
      className="Header__Icon"
      src="../images/download.png"
      loading="eager"
      width={64}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
  </header>
)

export default Header
