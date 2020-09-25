# Sujin's portfolio(진짜최종!!:sweat_smile:)

- [x] Welcome to the course!
- [x] Plan & Design
- [x] Git & Github
- [x] Head
- [x] HTML: Markup
- [x] CSS: Essentials (개념모음집)
- [x] 보너스 챕터
- [] CSS: Styling
- [] JavaScript: Fun dynamics
- [] Last touch
- [] Publish

# Git & Github

---

### :one: Git

- 내가 원하는 시점에서 버전,버전으로 등록할 수 있다.
- Git은 버전별로 파일이 어떻게 저장되는지 모두 기록되어 남는다.
- 즉, 내가 지정한 폴더에 Git이라는 파일이 생성된다.
- 내 PC 자체에 문제 생길때는 어떻게 해야할까?

### :two: Github

- Git으로 관리되는 프로젝트는 대표적으로 두가지이다.
  - Git
  - Bitbucket
- Git하면 Branch를 떼어놓을 수 없다.(:branch란 내가 commit해 나가면서 생기는 줄기로, 한 부분만 커밋해나가면 이 branch는 Master branch가 된다.)
- Master branch에서 기존에 진행되는 코드는 변경하지 않고 다른 버전으로 새로운 커밋을 만들어 나갈 수 있다.

#### [GitHub](http://github.com "깃허브")

#### [GitHub](https://git-scm.com/docs/gittutorial "깃튜토리얼")

---

# Head

---

### :one: Metadata

- defer을 이용하는 것은 html파일이 파싱(pursuing)되는 동안 js파일을 동시에 다운받는다. 다만, html이 파싱이 모두 완료가 된 후에 자바스크립트가 실행되므로 defer가 굉장히 좋은 옵션이다.

```css
<link rel="icon" type="image/png" href="imgs/favicon.png">

font-family: 'Open Sans', sans-serif;
```

[Google Fonts](https://fonts.google.com/ "Google Fonts")

---

# HTML: Markup

---

### :one: BEM

- B: Block(:그 자체)
- E: Element(:'블록 안에 있는' 더이상 나뉠수없는 개개별 객체들)
- M: Modifier(:종류)
- => 즉, 블럭/엘레멘트/모디파이어/로 나눠 이름 작성하는 것을 의미(: block\_\_element--modifier)
- ex:
  - .cards
  - .card
  - .card\_\_img
  - .card\_\_title
  - .card\_\_description
  - .card\_\_button
  - .button\_\_pink
  - .button\_\_blue

:sparkles: 이번 챕터의 핵심 :sparkles:

[BEM](http://getbem.com/introduction/ "BEM")
[BEM 101 by CSS-Tricks](https://css-tricks.com/bem-101/ "BEM 101 by CSS-Tricks")
[10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/ "10 Common Problems And How To Avoid Them")

---

### :two: Sectioning(1)

- navbar/about/skills/work/testimonials/contact/처럼 sectioning 작업을 먼저 해준다.

:sparkles: 이번 챕터의 핵심 :sparkles:

```html
<!-- Nav -->
<nav id="navbar"></nav>
<!-- About -->
<section id="about"></section>
<!-- Skills -->
<section id="skills"></section>
<!-- Work -->
<section id="work"></section>
<!-- Testimonials -->
<section id="testimonials"></section>
<!-- Contact -->
<section id="contact"></section>
```

---

### :three: Sectioning(2)

- navbar/about/skills/work/testimonials/contact/처럼 sectioning해줬던 것들을 이용해 안의 내용들을 마크업해보자.

:sparkles: 이번 챕터의 핵심 :sparkles:

```html
<!-- Nav -->
<nav id="navbar">
  <div class="navbar__logo"></div>
  <div class="navbar__menu"></div>
</nav>
```

---

# CSS: Essentials (개념모음집)

---

### :one: Box model

- 내가 설정한 css 스타일링과 달리 너무 사이즈가 너무 변했다면 99%는 Box sizing때문이다.
- `box-sizing: content-box;`가 기본 값이다.
- 컨텐츠의 width와 height을 유지하면서 padding, margin을 넣고 싶다면 `box-sizing: border-box;`를 해줘야한다.

```css
.box3 {
  padding: 20px;
  box-sizing: border-box;
}
```

## [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

### :two: Absolute vs Static

- css에서의 레이아웃에서는 포지션이 너무 중요하다.
- 또한 훗날 flex box, react를 이용할때도 position은 굉장히 중요하다.
- position의 기본값은 `position: static`이다.
- 먼저 `position: reletive`와 `position: absolute`의 차이점을 알고 넘어가자.
- `position: reletive`: 원래 있던 자리를 **유지**하면서 그 자리에서 **상대적으로** 지정한 top, left, right, bottom만큼 위치를 이동한다.
- `position: absolute`: absolute는 relative를 기준으로 하여 이동한다.(기준이 잡혀있지 않으면 position: static이 아닌 부모(즉 기본값인 static이 아닌 body)를 기준으로 삼아 원래 있던 자리를 **유지 못하고** 쏙 빠져나오기에 주변에 함께 있던 아이템들의 재배치가 일어난다.)

[Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position "position")
[containing_Block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block "Containing_Block")

---

### :three: Sticky vs Fixed

- `position: static`, `position: relative`, `position: sticky`: 그 박스 안에서 포지션 변경이 일어난다.
- `position: absolute`: 들어있는 근접한 부모 박스들 중에 static이 아닌 박스에 포지션 변경이 일어난다.
- `position: fixed`: **부모 박스와 상관 없이** viewport(브라우저) 포지션 변경이 일어난다.
- sticky는 position을 지정해줘야하며, 또 그 자리를 유지하면서 스크롤링 시엔 고정이 되는데, fixed는 완전히 기존의 문서에서 나와 viewport(브라우저)에 포지셔닝된다.

---

### :four: Centering trick(중간정렬)

- **flex box**를 이용할 경우엔 중심축을 정렬하는 justify-content와 반대쪽에서 정렬하는 align-items를 사용하면 되지만 flex box를 이용할 때가 아닐 경우 **수직, 수평 정렬**하는 방법에 대해서 알아보자.
- `margin: auto;`: block레벨일 경우에만 (가로)중간정렬 가능.
- `text-align: center;`: block 레벨이 아닐 경우에만 (가로)중간정렬 가능.
- `transform: translate(50%, 50%);`: 움직이는(lotation) 요소들을 포함한 요소들을 x축 y축 50%씩 지정해서 (세로)중간정렬이 가능.
- `margin: auto;`, `line-height: 100px;`를 같이 사용해야 텍스트일 경우에 중간정렬이 가능.

## [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin "margin")

### :five: Responsive background

- Background속성에 대해 조금 더 알아보자.
- `background-repeat: no-repeat;`: 이미지 반복하지 않음.
- `background-position: center;`: 이미지의 중간 부분을 중심으로 해서 배경화면으로 지정.
- `background-size: cover;`: 남은 여백을 차지하면서 늘어난다.
- `background: center/cover no-repeat`: margin-left, margin-right가 아닌 한번에 margin해서 사용할 수 있듯이 center/cover no-repeat으로 작성하면 코드가 더욱 짧고 쉽다.

[background](https://developer.mozilla.org/en-US/docs/Web/CSS/background "background")
[background-image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image "background-image")

---

### :six: Transformation

- 동적인 요소를 가미하는 방법을 알아보자.
- 원래 있던 모양을 변화시킨다는 것은 transform 옵션을 사용한다.
- `transform: translateX(100px);`: x축으로 100px이동
- `transform: translate(50px, -20px);`: x축으로 50px, y축으로 -20px 이동
- `transform: scale(1.2);`: 1.2배 크기 키움
- `transform: rotate(45deg);`: 45도 각도 기울기
- `transform: translate(100px, 100px) scale(2) rotate(46deg);`: 위 네가지 한줄로 한번에 적용

## [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform "transform")

### :seven: Magic animation:heart:

- transition을 이용해 **어떤 프로퍼티를**, **몇초동안 할것인지**, **어떤 애니메이션** 줄 것인지를 지정할 수 있다.
- `transition: background-color 300ms linear;`: 배경색을, 300ms동안, linear애니메이션을 줄것이다.
- `transition: all 2s ease;`: 모두 2초동안 ease애니메이션을 줄것이다.

[transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition "transition")
[animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function "animation-timing-function")
[transition-speed](https://cubic-bezier.com/ "transition-speed")

---

# 보너스 챕터

---

### :one: CSS Variable의 모든 것

- hard coded: 모든 속성마다 일일이 다 작성해주는 것.
- 반복되어져서 사용되는 수치가 있다면 그것을 **상수로 지정**해서 사용하는 것이 훨씬 효율적이다.
- JS에서는 const로 지정해서 사용하는 것 처럼 css에서도 **custom properties**를 통해 상수로 지정해서 사용할 수 있다. `--*`

```css
.first {
  --font-size: 32px;
  font-size: var(--font-size);
}
```

- 이렇게 정의한 변수는 그의 **모든 자식요소에만** 접근이 가능하다.
- 그러나 형제 노드의 자식요소에는 접근이 불가능하므로 전체 접근이 가능할 수 있도록 하기 위해선 가장 높은 노드(body)에 `--*`를 적용시키면 된다.

```css
:root {
  --font-size: 32px;
}

.first {
  font-size: var(--font-size);
}

.second {
  font-size: calc(var(--font-size) * 2);
}
```

- `font-size: calc(var(--font-size) * 2);`에서의 calc는 계산해주는 속성값이다.
- 미디어쿼리를 이용할때 위의 variable들이 유용하게 사용되는데 `:root{}`를 브라우저 크기마다 변수의 값을 재설정해줄 수도 있다는 점이다.

```css
@media screen and (max-width: 768px) {
  :root {
    --background-color: salmon;
    --text-color: whitesmoke;
    --base: 4px;
  }
}
```

## [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--* "custom properties")

### :two: HTML 유용한 Data-

- data attribute는 HTML5에서 추가되었는데, html태그 자체에 제공하는 속성뿐만 아니라 내가 원하는 데이터 DOM요소 속 html 요소에 추가할 수 있다. 내가 원하는 정보를 요소에 추가하고 싶을 때 사용할 수 있다.
- `data-*`처럼 원하는 값을 쓰면 된다.
- [] 속성 선택자를 이용해 속성을 선택해서 사용할 수 있음.
- d

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Use_data_attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes "Use_data_attributes")

---

# CSS: Styling

---

### :zero: Global set up & typography(1)

- 우리가 프로그래밍을 하면서 **변수를 지정**하듯이 CSS에서도 변수를 지정해줄 수 있다.
- 페이지 전반에서 사용되는 color, font-size, font-weight등을 한번 정의한 다음 작업할 때 계속적으로 사용이 가능하다. (변경할 스타일이 생길 경우, 사용되어진 곳을 일일이 찾아서 변경하는 것이 아니라 :root에서 Global setting한 곳에서 변경하면 된다.)

```css
/*Global*/
:root {
  /*  Color */
  --color-white: #ffffff;
  --color-light-white: #eeeeee;
  ...

  /* Font size */
  --font-large: 48px;
  --font-medium: 28px;
  ...

  /* Font weight */
  --weight-bold: 700;
  --weight-semi-bold: 600;
  ...

  /* Size */
}
```

- Global setting이 마치고 난 후에는 공통적으로 적용해야할 **Universal tags**도 정의해보자.(`box-sizing: border-box;`은 내가 padding을 줘도 동일한 height과 width되도록 하는것)

```css
/* Universal tags */
* {
  box-sizing: border-box;
}
```

---

### :zero: Global set up & typography(2)

- 웹페이지 전체에서 쓰일 h1,h2,h3,p의 스타일링을 먼저 설정하고 시작하자.(=> **typography**라 한다.)

```css
/* Typography */
h1 {
  font-size: var(--font-large);
  font-weight: var(--weight-bold);
  color: var(--color-black);
  margin: 16px 0px;
}

h2 {
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
  color: var(--color-black);
  margin: 8px 0;
}

h3 {
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--color-black);
  margin: 8px 0;
}

p {
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--color-black);
  margin: 4px 0;
}
```

---

### :one: Nav

- 기본적으로 logo와 nav는 block레벨이므로 한줄에 하나씩인 것을 볼 수 있다.
- :star:`cursor: default;`는 웹페이지 전체의 mouse cursor모양을 text cursor모양이 아닌, 우리가 일반적으로 알고 있는 **화살표 모양**으로 바꿔준다.(default는 기본값)

```css
body {
  ...
  cursor: default;
}
```

- menu부분의 active를 하나 추가한 후 navbar**menu**item은 `cursor: pointer;`로 해준다.

```css
.navbar__menu__item {
  ...
  cursor: pointer;
}
```

- active된 상태일 때의 스타일 지정

```css
.navbar__menu__item.active{
  ...
  border: wh
}
```

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```css

```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :two: Home

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :three: About me

-
-
-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :four: Skills

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :five: Work (projects)

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :six: Testimonials

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :seven: Contact

-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :eight: Final touch

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### : nine : Make it responsive nav

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :ten: Responsive web site

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

# JavaScript: Fun dynamics

---

### :one: Transparent navbar

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :two: Scroll to section

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :three: Handle contact me button

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :four: Transparent home

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :five: Arrow up button

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :six: Project filtering & animation

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :seven: Project filtering

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :eight: Project animation

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :nine: Final touch on button state

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :keycap_ten: Navbar toggle button

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

# Last touch 😎

---

### :one: What's next for Git?

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

### :two: Final Touch 😎 part 1

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :three: Final touch 😎 part 2

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

# Publish

---

### :one: Let's publish now

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :two: Free version

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :three: Use unique domain

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :four: Congratulation 🙌

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---

### :five: Before you go

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")
