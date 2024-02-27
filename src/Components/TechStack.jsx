import { Box, Center, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import dsa from '../Images/dsa.png'
export default function TechStack() {
    return (
        <Box maxW={'7xl'} fontFamily="sans-serif" margin={"auto"} id="skills" mb="10rem"
        >
            <Center> <Heading fontSize="3rem" color={"#c770f0"} mb={"2rem"} textDecoration="underline">Tech-Stacks</Heading> </Center>
            <SimpleGrid minChildWidth='110px' spacing='60px' mt={"1rem"} ml="1rem" >


                            <Box height='80px'>
                            <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://i.pinimg.com/originals/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.png"
                    />                            </Box>
                <Box height='80px'>
                <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
                    />                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX33x4AAAD+5R+DdhCVhhL/6B/64h5qYA3/6h/64R7t1h2aixNlWwzdyBu3pRZbUgvp0hxDPQjYwxrEsRjkzRx9cQ8hHgS6qBeyoBY6NAfFshiLfRHTvhrLtxlfVgy+rBcvKgamlhRQSAqRgxJxZg43MQegkBM/OQgbGQMPDQIXFQN3aw4sKAVvZA5RSQoMCwEmIgWgDrxiAAAG2klEQVR4nO2c6ULrKBSAAQUh3dLV2sV00br0jvr+TzdJq3Pb9EAgS+HeOd9f08gXlsDJAUIQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQPUowxn9gTCjfBQJgEMLmlyp1GyWt8WN/9fo+ee63x637DuMsMEu2bt9d0J4WKwoZT9v0kk1rEJYkuwFKSbes6GdsuoF+eGDSing4jrDhrdmQqZZW78g+5lcSKKSEoeLrAr+MubDqzM3jbshGDxaCKcswqtHZUE7t/FK28ooiWlwNJXi9hseiAesaOBryOwdBSvsB9EU3Q+kmmCr6r0UnQzl3FKS0570vuhiyxFmQ0hvfig6GKiohSGniuaE6GMpeKUMa+Z3B2RuKWTlBuvHbTu0N5aqkIZ16bafWhqpsFaZEHsT+w9qQl+yFKXMPXr+xNTQNpA/77Xb+pJuPP3f8zsBtDdlaI/C5juQh8iFJtw/8fcc9z9xsDXWNdM9+XyrkMP/nTex92mZdh7Dg7fmbgJHzapxK/9EMS0PVAQXb+VedYifhm3bkvQKJtaG4Bw2B6Yr49fPHoe8Z6RFLQwaGnvbAKCni77+pECqQ2BuCl91DwyTLwhyTRRhBGmJv+A90WQccR2SfbgOKCdsagov7GPRQg0EwFUgqGo7gmlLhVCCp2EoXAQSaCrE1HEOXrQMZLo3YGm6hy/phvPHM2Bquocv+iGZqO6e5mFMfmPw9hmoEGtKPgF58GiquLehLELNrE1XXh+nULYAVkgnrOtzpDOmmE7SjdZxG0xEPtDsy3CHHOtYmnw2KtLcM1tHaUBuK+uZ5ysIcV+1j3spsmLKNfMfVIOwN4WX+OXeL8Bqry9e1YkNKH7o8sBekg6HtB9J1KBGaIy7fgCWUxwbRIgE5On3HV++WirQVTj06GQrTaz/HNJRx1S3bhC3sFVeLMNbHjhlDbGmvSJ9ICNXomvXlUouULgOoRufMPRZPHBRv/KfSumdfCmX70sjoe2+pZXKEHRIwKf2M/5BvwOc/ilzSFjp+FUsZEiWHr/aKmuD/lShnmPbGovXiKV7zvsoapr8UFsupIy8+v0WVN8wc1292inOPilUMs40l9y9Wih7D/9UMsxyawZOF4cpfJVY1TB15dFus2PVWidUNs5uwrjHWmDLxVom1GGaNdfFoVpz5emPUZJg5jowdsu2rEmszzHZ8xSbH2otuSY2GmWMHSsA8kngaa2o1zNrqWmd44yk2VbMhIXygMfQ1davdkDBdQO5vqcP0lnBWg69FVAOGRMKvxqWfoaYJQwHH4zxN3JwNhYU8Bw0bzhHT9QG2hwrT0hVGycXXuHBQhBM3tDetA8HgZFdd0uFOF9WPsizMwsWe42OrAd55oZpScfBoBLhBie/PwO+hGTKS9TVN1+JgHAJK4FYy+bn2YhNC/qbgYKprGFVRsnv8B3DKMrydCRjYeeektlvmrijBmza0SY+PfgoGbnQU8Jfri17LyHkKbdekqHlbNDL1ZuJk9zXUuTi83skX+fIkjMSgqNlOO6h/TpP2nPOauXyIcCOdyPPbLH9dXrPW9kVdRkPtfoTHH7n/EeUVJTjo0bvT2mYxPAl70pxExDSLi6+6vyUKIDX7LbdXjnfhwpyOekx7ysA7lMuWbze/2dc70Cg5BF8DyUmhhNRlVA5OSg7vtDjysZDnuWyCx9qPi/VOS9VI9/lrM2P8sOWTi0R7zszp0zafM7DadbIzvpgQ2S3J0PA46vQzNa2U3vy2td3rAyq59lSYz9a72U273WlrbLglpY91L/ELSmUk975nwEjqzrDmt6EhabmQt9zTFvD+UTdea4/SsK/ShbmYP/IKj+uH+qdsmpmTDZc3s07Z09LEtyfucqDTKdASgBV9eCli0MictFypXsHkWWKdlQjSzDfgkgfmLMD5sYg+Kwj2GwoGC1302YTuaYvIJdnrnDdtlKgqTomERz60T1sQ4wvdRINZUc6Kz4ayKA4vRIp4g4MLdSm6NdQHc3OS8MEKZppO3ROR5TGOGb2iQ3Ld8tkOzBtPv1Qc3MEL0Speop7E26x4vcrRClmw1ALLo4Cc8tl2V9oJJWRSvDqwT61nbGp36tc1d10IPjR2oIcpcykMkwtwe/4pm67TLasjeLzTHG282rrvj0xX9Mu5flb4uPaxi00xTma37bOZyXtvm0SyXGcRTJLl7infxzfj9cDjmd6CccniwXKWJLPlIBaS251Nrr8f45yMFsuk271PlosRSe/of5+lUuJAbSeQfN8vu2VNd0QQBEEQBEEQBEH+X/wL/UVVyyD3P9kAAAAASUVORK5CYII=" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='fit' boxSize='130px' src="https://www.kaashivinfotech.com/blog/wp-content/uploads/2023/09/bitbucket9553.jpg" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8bHyMAAAAYHCARFhsNExgVGh4AAAr7+/sACRAAAAYLERcGDhQTGB0ABw8PFRrV1db09PSXmJmRkpO2t7hTVVceIiZhY2WvsLGkpabIyMkyNTjb29yVlpd6e33Oz8+/v8BNT1Hk5OSJiot/gII0Nzo7PkG0tbXp6elvcHJISk2foKFmaGoqLjF6fH1iY2Xy0XmBAAANRklEQVR4nO1daXeqPBDWiYpsKrUqLlW0LsVq7///dy+4VSTLJBBCz3mfT/ecK5XHJLPPpNHQjmAxC78/l6fR/nweN5vj8Xm+H53iz+9wtgj0f71WbKKP09wCAKvntVs+ad5AiN9qe730f/r7ePi+MP2iKtiEP/uEQK/daXJBfNd2APbbw8b0K0tgM5244Hg+n1sGHc8B99/0LyxmN/rxwWoTMan8crYt6CyjrmkKPAThCMBTYfdg6QFMDjWVP91wDU6/ALs7+gD/ItNs8ljF4LRKoHdFG+BnYJrSM7rTM7RLo3eFB/OpaV53bLZgCXSCEjoWfH6ZJpdgMAFPA70rbDiZViCrdenbMwsXRiYP5OoI5UkXFvrmOC7WFfC7cvxnwqQL4or4pWjDsnIrYKpRvtDgQbW6Y7CDSvklIHBeVcavuwQd+k+EDsQVbdXItg3wS+HBewX8uico4jwUA4GJdudqZlcrYV7hWTO9BLcGF/AKAp8a+X3tLcP8Ujh7bfZ4VKGO56HvaNqpQ+M79A4CQx0ER5UreQ5gUjq/4GxWhr7Cnpes/QclBmHKQcsq1TeOanMEf0GgRHkzrdMRfIBAWBbBt1oSTFCWRzWsK8GE4lsZBD/rSzChWIIJV2uCCcXCur/GW/QK+ChG8LvuBBOK30UIhvUnmFA8qBOc/QWCCUVl1b/4GwQT1a9owAW9+plqdHRcNTN8Xjdjm43+XIXgpF7uEh+2gr9Ye0WYhbxajP4WwYRiJEfwq4YOIR8E5CJwO76U8SGBY/cr+hlaXloCB/xQZmsvQ3DL/2P+OlqtZuFwYoGlW+B2bID1ZzgbDFahw/2ktcUTFNkyv0bEYroGR6aATQ7EhvnHb457zf858bZNV6Dqiff86SDcF6v0YqIP7jCT3n7n//LExTIUaULvdTsstmCVzrENk9c16Qr2lhfjCAp+Kepu6H67TqkcPWolzURQN4fbp13RqxKL+tzULS9t04aYKvtDwVfg9mksstb6LAvpDcpJDvswYVSXbETby16KCa6ExozFjOEFW3p2ipCW6/UsBx5w0spvn7pZCOzYJQlCkQbi6qKzsAgBODURm3XWGPLdXsLHO4/iz7fwEM1Wg8VgNYuiQ/i2jY9jK7UbsgXFLjcIehLVmPlCLwMRmAGuM/Z+r2PwvbRCPf6OOC0H3a/V+8fpnFa8X2kSmHD/+ndP+HaCKHEgJkgI/0+ktSipIXL8PGBd72D2HY/BcYndivifRMRV+AvQWIqdQqageWDl74craa/76xBDLKq0EIqaRM9whQ0mMuPprBQQQaTzL4vI2zoTRLEoW5RWgabYrmiP2I8PMG6vU1pOSwU7RL0ZR9gLbPfb81F1fPI4IhyZ1pr1tFjZXxhqLkriY4RaBNYiopaQq/D1Y4J5xxbjJKJO4Z9YQ5btJnJN7k9H1XLKAnMOE3FK1dkIZXpB/WVpugw05wRhzlxgFcrXFQXdH8nB+8k/irEWrg9LhLRKB8JuvgLy9t8U66GzBFUlQCf8KJbXHFucTmwDzO4QxpDu6OT8RJy2v0AyfF4qPtEJsZzCiF08w8gEtyv26DYI98WJQsuZplFRgxY06UJkH0Xv7wRkbIae5Gu+9GaMZFqUEfEsTcD4r3dkYxEyq5/7dSrEXqadMxOwEeStXp7UUkaOQkAkGq6c50oinMV+hVd+ETkeWOM5xfM2ldmknbHRsQ4ydWhPlptMWYJq/VFZiPG5kSfFvZRQ96VU5RYBQWfxnhwMF/2QL1UOoAV4+5I0789IVOiZ3qMpTugd9/CD0Y6TIGJeEfBy0bqHI/6h9agg61ERhsIE1A3uPa+PPoa2yZTFL9Buwj1Nhtei9VjCZBGxGuN2ENEmm4ss5tAOfLTmakFjg2y1EKRXxEjJccsE7pFVW52dYV6/wOpE/3j5ODp8ZTRQmgXWsLk4+mh9bzIC9Yot8mRdRA02MtAxb7D9AtsJcjG+saK3JsrwCqxKtFNvXViEc/85jGbVXoHLdTbbpwY+2F0XdX8Fcudd5D/SyDMYQ6QB6bSnxb5Y++Cy3vUB1tRMdh5WWfSMO/dZYBku0HLXKdDlpwNI8ZHIR1HZ7eOjRksw8kAGQK0Dop7xxrA2ZvcVyGRZb4rOyNXJZkuBfG9viHZEKIlxo0AqRHfZOCED+nVj+IY7Xf24McKaNDVj+I2TkP6kscd6Wn+TYefYOOMI1o8hbpeS/Z9liDyHzXNjjGVYM22BdWvPDSRBei2cQWD1+BjPsGY2DTojiN+lNbNLkdWwyRqiJU1kmlMWuFJaGYZm2yzyOCP1+LkxR37SNldjQgXSrSW7xhHJsDZpmSu+sAyPjRFyP99SAHUBsrGg6Y8aMVImMbp/TQEbqU98iyU2xV2veOkH0qRJ/EN01W29FCI2Up/4+FNs2r9e6gKbXutN0bG2XFmxUaDz3NYBP7EsX/1uEOi3hplEQVSdRA2+GmMhUWFUJ8sUa5VelsXG1gvReokMAb0sl0EZyG6w9Jo708QeQNfsX2op8b0k5mr0X4HVhs12ak2jD22NMvlo2XHJCeK7NETzIioD/pUv0lGmfrYmxQr41oJr/AzPsCaZbomWhGvzE1qY1iVoii2Ieji16NrEmsgaie6QW5vdQaIlqA6WG7oI+lFfKjNM12ib8xUyrZL3QL3MxDzzwf0f/KEindszUl19Jju5U8jsuIfsx/dbNE02H16xk5hD+ei3kJpqTSyjwkbqJorfI4Xve2ryhxRph9xiPPqeZHrXmkbb17oyPaTPgl+mRbpp0jxdyy1F9HhQrtG5SUypjFhuuuZz6YFMH3AznfJuxD6VvEwkM4YHHTS9wW8bWEXZ21Iyek1ymyYUncrT+kvZd8za0JLbND2LUbUEJ7IE2/8yzx/kh8xXOnjgay493vZlCWQM9sefGFVm3bzL37xIXmaboMtMn9GuyEYNVC53zfl5EjOGfkFgXYFMDZWuj85XOI2VxnH34UfzVp2dla5poPShMeo1O7YFYNnsZL8HW40cZ0fF66Mp9+rRVSIch2H0Hg4nAEy/zINYk3I8zNnfykdOzqSghdx+L23tvh/Z3+bCMSx9IQfbnvr139SgIMX1ym7m1Y4dlPMtGIUlGquD4bjQhQv0wC5lVtTLBz94h77lwPGtjOzUVxS7gM5qUtGmF3BRFEb/ZV7tyuHuG78HMBrO1NcyGEzjMYBUzIEGVjEsJXXcexmZ9EVExkXLBrCP23C2kSoMDwbX4exWYXZNTkCQVuBg77M6PTgj7CfiX66+YQ4szuE9vU2g1y7rhgx2KpeW//dfwjIB9oS0ZUr9Sr2GkBPTpVepOCTzkyDDXaQjpT8+ZeapCcArSaeP3utkLWxcC65s0h87u0IMbpaTtT7Z6Bpm3Jb0NKLyLlvkx8lYV7BkF34stDWII91iI5Fx4UJwEQsrYEPs51MldrVs+RtepWNFjDcVpTi/GSc+G8sX7lOVTKrEkFjeNwuLRFk7MHsprWCfKpU0YEu3uRDfM8PegZkDLCiHUAvEqTnhL9+MEOEsYdPKaHC+ylBr5cOPQWYCc99To8tyILJuM88KURz5Xfz6YdJD/bSs5Xl5PGK7Uj21eUvFpSn2dJwYu6WXdZxXDkv4qabfsL1MLHhYAddlXfX3ogOCCT3M4Ktm39BFlXQQG338WQciZ4rNzvD6Uh0bdqr3Q+ALQamQ2Tqse0jzinw2AfBatyvF0ovIzkP1wJtUUUgOllRJGuPGalqLXnDYjrzLhXjecXsoFAMvdAmx3F2yrPuAmfciBAmKt7MXURey9wGzfk69WUOl5Mn9zaTlNz2n7GudnVjAMlXJZo6oWhF0DlNS94JV7lZP9C9N2gjdryJQZthS68kKqIpfZ9GXKkPlWjv6F4K+SmhVhuqtLnTpra9EQZFhkSq0KZ2irhYvNYaUZKgE6FfLWkc9VV9K2gIKjsYdUr+0VfTP0qHCEOSjei9gVJNZ3nf5akOBYRlyj76KiYSGU1QySXmG5Qj2D9b3ttNrjTNXNgebWTg8jVWLiKUZliXWOTdZ+3bqNtm7Y4K5m/7bstvKh1SWYXn12KLsHun4CTp3E0gxECXNsJiayIITV6NAmaGU90TKLTcfWBLFgZUw9J2Su5IDiQLPKhh65/KNDnyRbgUMYaRjBCC3XijDUFXEYRkSXf7NDHDziHQzbOmLFgVHVMWEMkNcrM3a6ez2+MTsVK0MCWhuY1254iSfQhL/CgTDtv4uiK64rLynjyFMqugPiHoC1ahtDd0y7TQeukt+cbLyAEI+ww6cqmtfHex4W1UPQ2dcbdvjFNhbVQdDt/rO1WCbS44+GKpaHMzsWh9OJjoeN/8Y3UhlM/RhZGrE72BEteO8Uhn6sDc5zzDhmN+rysMzKAxbcDQ99mdxyjVeKe/SnKRxYVSHeZSbLTgZ/aisl7ODZYmlrd1IGt3p7mkhifqA+uPvsW7DWUPMuQAGS7idyE4B23hzk84tB2LTxy+P7vvkUnNyLvJqmz04DsA6rNk9BXcEq+i96MlZhGFUi3lb/+N//I//gcd/4N7lYxzC/cUAAAAASUVORK5CYII=" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="https://miro.medium.com/max/1024/1*33CwBYkmnMfpA9Djup22Jw.png" />
                </Box>
                         <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" />
                </Box>

                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="data:image/png;base64,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" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='fit' boxSize='130px' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/MySQL-Logo.wine.png" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src={dsa} />
                </Box>


            </SimpleGrid >
        </Box >
    )
}
