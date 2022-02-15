## 구현방법

1. Toggle 
> useState를 활용하여 토글의 상태를 boolean 값으로 설정하고 true일때는 토글이 활성화되고 false일때는 비활성화 하도록 했습니다. 

2. Modal
> Toggle과 마찬가지로 useState를 활용하여 토글의 상태를 boolean 값으로 설정, 상태에 따라 display:block, display:none으로 변경하였습니다. 

3. Tab
> 클릭한 li의 인덱스를 state로 변경시켰고, 변경된 li에 색상과 텍스트를 변경하였습니다. 

4. Tag
> 인풋에 밸류값을 가져와 useState 태그와 비교하여 빈값이 아니거나 이미 포함되어 있지 않으면 기존 state에 추가하는 방식으로 tag 컴포넌트를 만들었습니다. 

5. AutoComplete
> 미리 배열을 준비하고 인풋에 변화가 생기면 인풋에 밸류값을 가져와 필터 메소드를 통해 배열에 인풋의 밸류와 같은 문자를 가지고 있는 문자열을 드랍다운에 뿌려주는 방법으로 만들었습니다. 

6.ClickToEdit
> 인풋을 클릭하면 포커스 상태를 유지하도록 만들고 포커스 상태가 아닌 경우 현재 가지고 있는 인풋의 밸류값을 state로 변경하게 하여 완성하였습니다. 

## 설치

1. 프로젝트 클론

```console
$ git clone https://github.com/youHaveToDo/wanted_pre_onboarding.git
```

2. 패키지 설치

```console
$ cd CUSTOM-COMPONENT
$ yarn install
```
3. 실행 
```console
$ yarn start
```
