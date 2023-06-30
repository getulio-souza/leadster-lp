'use-client'

import React from 'react'
import { LogoContainer, CompanyLogo, LogoImg } from '../1-logo/logo.style'
import Image from 'next/image'
import logo from '../../public/assets/icons/logo.png'

const Logo = () => {
  return (
    <LogoContainer>
      <CompanyLogo>
        <Image
          src={logo}
          // width={30}
          height={30}
          alt=''
        />
      </CompanyLogo>
    </LogoContainer>
  )
}

export default Logo