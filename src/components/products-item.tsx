import React from 'react';
import ProductItemStyles from './products-item-style';
import { Button } from '@mui/material';


const ProductItem = (props: any) => {
    const classes = ProductItemStyles();


    return (
        <div className={classes.container}>
            <div>
                {/*<img src={props.product.image} alt="Img Error" />*/}
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVEhIREhISEhISGBgRERERGBESGBgZGRgZGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGDEhISExNDQxMTQxNDQxNDQ0NDQ0NDQ0MTQ1NDE0NDE0NDQxMTQ0ND8xPz80ND8/Pz80MT8xP//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAEIQAAIBAgMEBggEBAQGAwAAAAECAAMRBBIhBTFBUSJhcYGRoQYTMlJyscHRQmKy8CMzguFzktLxFBVDY6LCRFOj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAIBAwQF/8QAHxEBAQEBAQEAAgMBAAAAAAAAAAECESExA0ESE1Ei/9oADAMBAAIRAxEAPwDzsCOgtHATi7miK0IEcRMEdoiI4CIzQ20QEdaG0BlomIHHxhZgBc7hrKL1Cxv+wJsLeLmHxKhwdyjebatyA5dkdtOocwZQVBG8XGbtmeFNr203d8kaqSoU6hTcdUc9c+oXc5rkk33311j4x1uLQobiaHRWhAhtBxcwFMe2WZBewINhfkTwPbpLB2q9rG2ZTowtqAdxmZFaTZ1vV58Yrt01y3/EupB6xxHnE9Mi17EHUMuqsOYP0lCW8HicvRcZqbHUe6feXkY+NlOtFaWK+Hyka3VhdW94feQkTFG2iIjrQETQ0CG0VoSIDQIrQgQwG2ihtDANo4CKG0wACG0QhhRtoiIQITCTbQ2jrRrtYEngLwM3aNbUKOGp+gkVLXv5yrUcsbneTLuHIBBIuBY25zpZyOdva1MbT6CIi3ta543Ov9z3TLImphMQArPUPSqXCg9drm3L/TKlWkC1kHtbh1bge+1++RK2xWhVZNiaJQ5Wtcb+qRiawrQiAmBXB3G8HTooVF9Bx0lv/gCVRh/1EZtea7wOu31mdap2k+Eolm0XNlsSOYvrpxmlsrAq/SsGUqyOCdVbeGHlIq1E0GDAnMjWPWN4I6iL94mfy/TeNRcKoQqT/DNil96X+xtMmrTKkqd4NpaTbCsMtRdCSrW4ofqJXd8y3Ju1NvVk+8NSjeREySz6rsRWgaOEBmhsJEQEJmhtoLR9oLQBFHWigG0daKKYoAI4iAR0BqiK0Kw21gIiUtqPZLe8bd0vcZl7ZfVR1Ezc/U68jKJltH3fvSU5JTfWdLHGLpY+GnZxk+CrBHDkXy3IHM8L9Uz2q77cftJ8Ode8CTYqVLis9RzlBZmJaygkyGnmBs3ZrwM9a9EsAKeHUkdOp/ENxqAdw8Jq4jA0nBFSnTYG97qNbixnnv55Lzjt/TbO9eHVVZjYXNuA4yVMFUWzGm4W5W5RgL8RrPbMJs+jTFqdJE0A0UXIG654yr6S0Q9Br65SD46H5zZ+f3kh/T/teQlra8jLJxb5At9FYuLaEE8vPxlLEjKSOBv4jT7QI97G3Ueoztxx7zxfwmOZA2U+1bxB5dhMWJxRdUDe0mYX5qbEX85Qz2J7PkZIW0vzmWN6JljAvqV99CP6h0h8vOVKj28/vIsJVs6nrH78pvOxnfW0saY9Y0iS7GiOMIEJE1JkVobQ2gC0UNooBtDFFMUCx8Yoj4DRHAaxWhEAATF2yemPhHzM2xMPa69P+lfmZWfqdfGfFFFOjis4NL5z7tN279APnLGyKeeoie9UA8SB9YNnp0Kv+F8z/aavojgyzh+CVsMvez/2kbvJVZz2x68i2AA3AAC3ADQQxRT5te4gZX2kt6Tj8h8tZOIK63RhzVh5TZ9Hje3MKQoa3/UqDusDH7P2eXaottWwq1R35DfxM39vYP8Ahp+d657spUfKaOxMABiKen8zZqqe3Igns/s5l5v4/wDTgKVLMCSN1SmD8LXU/SR1wUzod6EjwP8AtOhw2zunWW3sVsL4NVtMz0qw+TEuN2vy0+k6Z1LeI1nk6yqtW/l9RG4cXYDrkcs7PW7r2k+UtE9rdw2qg9QMTb4sP7K/CIWE5O5CGFd0BEARWhAiAgK0UMUAwQxQAojoBHCGgIYLRxEMNmXtZNSf+3fwcfeasobRcWtvNmXuI+4E3P1OvjBkqpu747B08zqDuLC/ZvM2MVh1dc6qEKgkjgy8x1y9a45zPZ1NszBN6t1GrVEBHZlv9J1OwsCVSsASMmLoNoF3DIeI6zKnoyFLoW3FMvflsJv1dlljWyO9NmqU3GRyoIyICCNx1XjPNvfvHoznyVq00qk3zhU4AqrMeskWAjce2IRC1P1b2BNnRwe6x1mbX2W7IcuIrpUOozIHUniCQD4+UGA2S4H8TE1c5tolMMo01JLKPCc/4T72K/l+uVT2f6Q4gvaotNlvuVWQrfkbm86vUob2zFTu3C+4TmP+SuHyK/rBvL5QuW5O8DS/UJ1KCwA32AHbaTvnfFTvHH+lfQKIi5siEm50GYnf1zQ2JTrvkrFKSZKPqkBz9JRlsTx4Si2EerUNvadnILaKQDbvtymhiaeJRP4WIp1HBAyFGSw/LmOtuUvnc8iLeXrPo4RxXrF1Ch3w5LAZ0UrVzc726PlOa9P8ORiHY21VGBW9jmv9jOyC4oKHL0HqXFkRHPE5SxDWG8nvmF6d4NsgepYuzWJUWuEpjcOWdml4vNTqde5vjgKNHMyj3r+A/wBpo7Lpbm/I57ybD5GWW2c9F3SotnpIEI/Myhj5MJPh6WRQOoDw/Znp1XLOT6a2AHIAeUREdBOboCiIwiIwBDFDAEUMUAwGK8BMAiKAGGGjHMY2R4mrlHdDOo8VXCi3GZjteF3ubxsuRz1ro4VQrqTuDfPQzVxD5WRfw2seRB0mTLuFcPZH1903sR1TNf63N/TW2W5UDnTYj/KdPpPRaTXAPMA+Os84wqFQL7+PdpO72TUzUkP5SPAkTy/l/wBd8tEGPBkKmSKZxdD1AGgFh1aQgwAyWmoyueIUW/zCBSwajIum4sR1EMbyzeUtlVMyOPcrVkPc5I8iJeikETnPS6kXfC0wLmpUbTmM6Ad2jdwM6ITj/TLFsuKOQ2NKktFSOBKXcjkbuROn4p3SNfGHtpg+IrMGLh69Rsx/EMxsR1WAt1WlOCIT1OQwRQXgGKAGK8AwmC8RgKKKKAICY28RMAqY+RiPBgOmdjnubcpec6TJqtcmVE6vhsUbFKczolNo2KCNTC7QJIDAa6XF9/ZO79HMQChTihJ7j/eeYgzp9hbRKkNxGjD3hxnH8uezx2/Hp6CpkimVaNQMoZdQwBEsKZ43oSqZjYmhiEc+rqVHVzp0vZ6jNCrilTTpO3uoC58Bu75Eu0x/9Ve/+GfvKnYxNszB+qTLfMxJd296oxuT++UtiR0KyuLqeogixU8iOEmAk362HpUVA1R9EpI1RvhUXt3mw755ZjcQ1R2dzd3YseosSSJ2PpxtEIgwyHpvlqVrfhXeiHrv0j2DnOFLT0/izydcta7SijSYgZ1QMEF4bwEIrwAxEwDeEmNvCTrAMUF4oDIDFeAmEnAxwjFjgYbDcS1lMyiZo409GZsvKdUooopqCjo2EQAJqYC+Q5dGVrjvG6ZgHKbOFpBLqL3yg3PE66zNfFZvro/R3bAHQfQX4/gb7GdWpnmNSkTZ1uHG+3H7zoNgekYFkrGw3A8j9p5d/j/cejOueV2AGUHIovvtfLmPWZHSxVS9v+HYdroV7dRJabAgEEEHUEbjJ1nHroKoL3sLm1zxPfIdp7TTC0/WNZqjXFJD+JhvdvyjzMZtHaSUFzP0mPsIDYu3LqHM8Jy2NwlXEj1lR19bUZ8im4XKiE5E90Wvbs65eM9vajWvPHOYrEM7s7sWd2LMTvZjvMjEa0N56nIjBFBAUMbDAMBiiMAiEmNhgK8UEUBgMDRCAzUnrHCRrHAwIsX7MzppV9QZnGVE6KKKCakYhAZE9TlAs0dWUcSwm4R++Uxtkpd7ngCe+bUVnU2HoFgcvSO8qPa67DiOyQYjCBtRoePb9DJKZIsQbEbuFpp1KvrWP8MjLpnG8ta4uPxA+V5zs/x0zr9VR2Vtmthzb20G9G5dRnRVvTNAl6dN2qH8LWCr1lhvH70mfX2FVsC1NiDaxWz7/h1ho+jVbf6pj8TU18i05XOb7Y6TVnkqrQL1Xz1TmqOQBwCjgAOA1na7Ow6vUoqNVpBwp99mQhm7N/beYeC2NVD2enY2BXO65Sb6klSb25dc6DAOUqJm0KuARvtrY92sc96y6/UeYYhMpI5EjwNpGDHbTqFK1RX3LWqrflZ20katfdrO3EynwQXgJgGGMJhvMBhjbw3hQxQRTQYoooESxNApiMJOWGNWB3A3kDtMAtM598nq40WIUE+UoM5lyI1YmJtGGoOEhim8T05nJjQIpJRTMQOZA8Zo2NnU8qqTvdj4W0+U0QsY6WC2/CRbuBkoEikJVF9dwDM3wqLn99c18NTyog43QntLAmY9OlnYdbBBblfpfUd06Jh+pT/5CTWx0+LfKiD3npr5iXhMvaJ6dFfz5vAC3zmnOdWjrDVDycDuIImbj2y1ra/xEDj4kNm8ivhNOu1hfkVPdcXMyfSZsnqn4pUYdxFyPBTEK4T0vo5cS54Plqf5xc+eaYmGXpaG1+HAnrnU+miAsjj8VMrfmA1x+qclOufiL5Wg9MrvGh3HeD3xhjji2yAhrFdDuIIPVI1xCH2lKnmn+k6RxU0JMMcKd/YdX6vZbwMDKRvBHaLTFdlAxQXivAMN4yG8B14o28UBixtV8oJ5QrKuOfcOuVIy3xA+Lc6Xt2aSuWiiCyuOfSvFaTJQPHSTJSA65orrSJjCtpdTfrv+cbWpX1G/5zOinNLY1HM9+CC/fuEzws6LYtGyFuLnyG76zLRbZd3aIFNhbj7P77pK66efhHpQuSQpNhckcBz6pLTtm0+mB7pY+X95thfmPIzM2YnTY8kHmT9jNWTWxr4lr4imOSKfEj7TYnOJWzVw3AeqXssNfnOlMiqiOst0Yc1YeRlHbOHNWhpvA9YO5SZoSPDLdAp90oe66zI1wPpSlqaJY2ptobH2CABr23HdOPaen7QwvrKLod5U2+Nf7ieZ1F1nXNc9T0wHzjRHxp07/nLYUsJi3XTNccm6Q85DAYFta6Noy5CeKbu9ZI1FhwuN911BEz5qYPE5UF9wqBewEXk2NmqrRR1YWdhwDm3YQD9Yy8x0GKNvDAjZrC8zK7XMuYl9LSki3MvLnqo1Etjoj96yIJZvOSOLsB2TaxMI60AiMwFlB3xiuRodesR+X9mEQAmHzHdqbDTmZ1ibNdAqlDbKoFhf5cZU9FsB6yqGI6FMBz1ngJ3Rka1xucsTB7HJ1qHKOQ3nv4SxtXKlPIgC5zbTkNT9JpzB2/U6YHur5nX7SZbaq/EGzE0Y8yPKXjK+AWyD96gWMszawsIemT+dfICdiROLw5482Y+f9p2SG4B5gHyk6VkbStnyh/y1L/5iG+sszPx5stT81NW7wbH6SWoKi2dxyc/+Vm+s829IMPkruoGmfMB+VrMPnPTsYOnf3kRu8XB+k4b0zoWqK/vpbvWXm+p18cozgfaOUc9/ygYRbusTqg6KIGGAJKjdBh+ZD85CYkbQddoFl2uxPPL+kQExiG/y8ABDJdZ8OijYoGbXe5j6KWHbIVFzLUpyR1N4MVLViYq4074/DrYdsCSFfnAY4QDCgglzZ2Hzuqe8Rfs4wR3Xo3g/V0FJHSqdM9/sjwtNOECwsNwFh2CCca6Qpy202zVH62yj5Tqbzk6fSqDrfN4Xb6TYytKgNNPef9RjzCBAw+U0Mw3sjrF/r9Z2GGPQT4F+U5GktgByFp1mE9hPgX5SdNymmbtj2R+ZWTxsfpNOZu2R0FPKovmCJMbQxIulN/yqp7GUH5geM5r0uw+akG4o3kROmTpYYc1pg96a/SZm1aWek439G/hrKn1l+PMXEAj6i2PYbRgnZzAjWOjTv7j9I6ADGJw7JIBEtMhsvEHL33tAdT3d5joALaciRCZLpCigimtUKC6XksCCwivymuROLi3XJFEYokhNoA4x8Ym6/OPgJROo9FMJ0wx627AN3nMDBYfO1uA1PZynebBw+VC/vaD4RJ1fG5nrUMURinJZtT2T8J+U5KhVyupN7WbcL66W+s68jz0mJX2MfwMCOTaecrNZSo11cXU9o3EdokhMrDY7/l7cxEtU9jE/zHJHIZj5mb4wEYHcQew3nVYH+Wnwicu+yipvSbLzDcZfo7Qr01RDTpv+EWYodAT9Jl9VHQzP21YUiSbBWpm/LpD7yr/zioP/AI//AOq28bSvicU9dcjIlNCVLWYuWsQQAbAbwJPOC/squpw9yej/ABFv3n+3jKwS65TxUDytIaGFRPZWx33JJ175YENeYbRpZXdeTsPOUxOg9LcPkrk8Kiq/edD5iYE7T45U07+6OA8O6D8R7BHTRbw9BG1V9V6RVlsSBqbEGL1f8cj/ALn1JjcB7X9L/pMs1LCux5dPwS8xqpVWzMOTt8zI5Ni/bb4r+Iv9ZBMXBijYprVY7u6Np7oYprkkXdBW9nwiigPG4dkcIYoGvsjc3xD5TusB/LT4B9YopGlZTmKKKc1FCYopgQgMUUBGQYjenxH9DRRTRQp/y/65pp7I7BBFDEkUUUKch6bfzE/wz+ppyhhinXPxypq7z2D6x8UUoWcB7X9L/pMnxn8x/g/9YopJPiDG+239P6VleKKHSFFFFDX/2Q==" alt="" />
            </div>

            <h3 className={classes.texto}>
                {/*{props.product.nombre} */}
                nombre
            </h3>

            <div className={classes.inferior}>
                <h3> {/*{props.product.precio} €*/} Precio</h3>

                <Button variant="outlined"> Añadir a la cesta </Button>
            </div>





        </div>
    );
};

export default ProductItem;