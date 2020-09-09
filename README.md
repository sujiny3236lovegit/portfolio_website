# Sujin's portfolio(진짜최종!!:sweat_smile:)

- [x] Welcome to the course!
- [x] Plan & Design
- [x] Git & Github
- [x] Head
- [] HTML: Markup
- [] CSS: Essentials (개념모음집)
- [] 보너스 챕터
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
- :arrow_forward: 즉, 블럭/엘레멘트/모디파이어/로 나눠 이름 작성하는 것을 의미(: block\_\_element--modifier)
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

### :one:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :two:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :three:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :four:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :five:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :six:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

---

# 보너스 챕터

---

### :one:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :two:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :three:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :four:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :five:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :six:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

---

# CSS: Styling

---

### :one:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :two:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :three:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :four:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

---

### :five:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :six:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

---

# JavaScript: Fun dynamics

---

### :one:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :two:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

---

### :three:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :four:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

---

### :five:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :six:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

---

# Last touch 😎

---

### :one:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :two:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

---

### :three:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :four:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :five:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

---

### :six:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

---

# Publish

---

### :one:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :two:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :three:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :four:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :five:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

### :six:

1.
2.
3.
4.
5. :sparkles: 이번 챕터의 핵심 :sparkles:
   > `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

---

---
