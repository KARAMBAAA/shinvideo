import * as React from 'react';

export function CandleSVG(props) {
  return (
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="512"
      height="512"
      {...props}
    >
      <title>writing</title>
      <path fill="#000">
        <defs>
          <image
            width="424"
            height="512"
            id="img1"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAAIAAQMAAADt22qdAAAAAXNSR0IB2cksfwAAAAZQTFRFAAAA9Pv7yo1xIQAAAAJ0Uk5TAP9bkSK1AAAHXUlEQVR4nO3cTY7jKBQHcCMWLDkCFxmJa81q8NE8N/ERvMxIUTzGfBhwXHn/l8RV1QqLVqfLvy7n8cCAsbvusNjh+GfHZZ4YSM4XhtLzlaEsS7n5hiMxc5RiKc1SlqUcS80cJVlKsdQSwnmGlWEp51WPqpmjxKoGUMlVjaBSq0K7gDXwcBewBh5uzEvGX/HkWKrrglezD4VDK8xX1+DQCvPV1Vu0wtauxqAVpn3UDVph2gO4l1pPTqGhXwMh0bayBl2gbSVUMNpWwjdyWOjj9cRiWS/C4QYLvQz1q7HQq/CFFBZ6FYInsdDrcLTAQq/jmWHdlInKQllvYuwMVGE21hPWVtKwBmsrLioJqhAEAVVzDh1UzbmakM5N5GMNS2kgOUT+NgpIDpmVZCkBpJTcaglIKbUpYPCrtjxy9JQqlGUpQ09EvX0ZzVKKnr5PK4monBCCnvQ8ZYrkO1M5crPkqq0pnqT+8n9YUIk1b1El11xClVprypI7qRB5vf6Wc1Q4z3cr/QJFjTxX3b5F0XM+9NinqT4pem8jz1VDVEDfKyo10NUYFXBNEes4CFXdphQwQFzHQasCrsthBGsCRdQtKmC8EY7lqD4oZEBvfLy9ghYRw5rIDK6MaJZShaJPisrfRZ+AWdYZzmWhIlGpnqhUpQai0pWiX5fLQg29rRQ1iK5S1EScX6CIFSYa1ZOUbNTwRqUaNZJUtfCCqC0fDDWlTPnfK0D1+QN5FmuqiqUqWyWRI6ZvfauHp6i3i1z1TQwx6evhDE9poqpziKcUsVly1fC0kh/1UT9Avbul1Irab3yXovY2vJ6Nq8phEHUzga0GGZDKJwmpfKhBVA4BpPIXw9SQFXkMUIxoMDXlT4i65E+ISjGgLvc8o3yFuY6+BGPSIFn48FOVTkr68IOqXxr/xFIXhtKYuoYZ89q0qItEvqdQLCULNZKU7zcFS62d/c9W7vco6kyKq+ZKDW9U8qM+6qcp8pL0a1T/56j+o1IRH/Wr1M/PqG/pAQxDTUkNqLrA6hKmKKC6hqVOSNn5JmaGilM3hppAZU5XI6j0E2oAlWIpmZYQICXijBQbLYs0Z4ZUl+bndBU33EK39lXcHBFWKzCl43oKNLvJ+zcx1cXFClCZcDioYnmv0t+o6CsVzypkVeRPVKZR1HU2niqP4yn6quN5yr5EUVeJeaq+N8pR9JV2jmrvO/DUe+9xjE+r994nOvf+Mk8Nxae33kMUO9W/U5WH8RRxeiNfpIZ3qvIjTxGHlW3i0QaI56q68dKGRG33QhvcnKvqLpo24GgvPbRBwJmqPYp2Od8rygXsTNXWKu0Cdq4aGapthbRL0Ylq1/+RLg9nqt1BpA3qO0Xq6Hlqt/edqpp/eZ/STNWmuHub2u+IdITc2HculqUMoaXs94dqQs+279Yl4UrkiLO01yjOi1zwdz8ENZ6lgAdtajXgqnjGl6WQx79zFwU8Z1p0UQZ5hCMrBz5kEv4yz8QpVKlkte3usQqhU+XutIcldTa62qxHVabcZ/awpG7DspSrNgY+KqkDcNXGQKpKO8ZoJQZOAMqMjerzj9RhZPzMKyrZquMqX+ro39gBRJWP/OIBhiVu/0WlGmUOAyqKI/0jFaboeNxhLqtaDapQx7msiwj4xim39JXHuWwK5ZuZ2A5Ux1npipqNO8aS0sdZObdqu7yYw0wRtbq2TyPdD2Ks2NumLKrW15G1arijYnVd4+lO7bNZ9y82ulSdP6RV9yosHhNrxb+crVX3KszsfkRRdncaulH3qtmu7eRQ2fvKLaE1VaBKdZH3W9iiOnWoxoNHLefdvfXy4az+4JUV+3vQpeqaR5piCa2pGq0W6nbwkGsYnlSj1eKhs+uXqhqtFo/FXQ4eww0DjXq0uqnpYB4WlKgy1BYhvD8PeziluzvCYqsv0X31eFrMVeM3q0dX/N+qflbkh92/PV7zf132nte+2mdgvy4RtVePB2VKvxwqF86vKgfUQLlxTjCo9nHgx8Urw1KOo+CvtSosL5LCgzEz6jgoC6MbK4RhVxJarqzAX1iBH1Pgv2z8VQndolfAokRcbNEztOgSOx0DnV9SFn43YlTIulXsNx22KhTVjL2VclMAilcR5CVxvqikoAVDldo/tPSX1YipW9c1A39ADYjSaT9ez1IIyq9TQlV4TRT2StWksDfn8lQ4Hn3ldlI+Df8B1CUpQa+z4rVSClkqzErTc7FSwAJjUKP/6ykqTifJvcBdRbt6ddvbrHyhXMz2ijKKmJLKt14oo4in1ZQi9FG/SfFyA8pDXvZmRRks5t3nW6t0j9W4Vw+L3vasA0rFYRSmRJzaTJDq/mapjq/WtEAvmGx1ZSgTVhRhdTtRzfRtq7lorupxtY4qqZtdSzXiSsaX4cPqgivBVTfqVtKiLL0OT/W4WnrAEVd2CT2+C2BRV1wtST/j+xTWWTas1hk9S4GlY61UTNxVEd4KDHO1x7IUbxXrtNB3rCB2rCB6ZViKt5rKW7nlrRIzV6TR2APTk6JM/wOvPJSYbKFslQAAAABJRU5ErkJggg=="
          />
        </defs>
      </path>
      <use id="candle" href="#img1" fill="#000" />
    </svg>
  );
}
