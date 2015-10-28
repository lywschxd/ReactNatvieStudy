# React Native组件
####DrawerLayoutAndroid
React 组件封装平台 DrawerLayout（仅适用于Android）。Drawer（通常用于导航）呈现 renderNavigationView 渲染导航视图和直接子级，
是呈现（您的内容）的主要视图。导航视图是最初在屏幕上不可见的，但可以从由 drawerPosition 指定的窗口的侧面拉出，其宽度可通过 drawerWidth 设置。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/DrawerLayoutAndroid.html)
极客学院Api中的例子有点问题，对renderNavigationView的设置应该是一个function
```
var component = React.createClass({
  navigationView: function() {
      return (<Text>I am in the Drawer!</Text>);
  },
  render: function() {
    
    return (
      <DrawerLayoutAndroid 
      renderNavigationView={this.navigationView}
        drawerWidth={300}  
      drawerPosition={DrawerLayoutAndroid.positions.Left}  
      >
        <Text>Hello World!</Text>
      </DrawerLayoutAndroid>
    );
  }
});
```

####图像
一个 react 的组件用以显示不同类型的图片，包括网络图片，静态资源，临时的本地图片，还有本地磁盘的图片，比如手机照片。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/image.html)
对于网络图片，必须指定长宽。否则无法显示
####ListView
列表视图——为变化的数据列表的垂直滚动的高效显示而设计的一个核心组件。最小的 API 是创建一个 ListView.DataSource，
用一个简单的数组数据的 blob 填充，并用那个数据源实例化一个 ListView 组件和一个 renderRow 回调，
它会从数组数据中带走一个 blob 并返回一个可渲染的组件。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/list-view.html)
1. dataSource listview的数据，一般为`new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})`
2. renderRow  listview的item，作为显示用

demo
```
var component = React.createClass({
  getInitialState:function() {
      return {
        dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      };
  },
  componentDidMount: function() {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(THUMB_URLS)});
  },
  navigationView: function() {
      return (
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData.name}</Text>}
              style={styles.listView}
            ></ListView>
        );
  },
  render: function() {
    return (
      <DrawerLayoutAndroid 
      renderNavigationView={this.navigationView}
        drawerWidth={100}  
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      >
        <Image source={{uri:"http://www.zx017.com/upload/Article/2015/01/201501301553331187.jpg"}} style={styles.image}/>
      </DrawerLayoutAndroid>
    );
  }
});
```

####触摸
######TouchableHighlight
一个包装器是为了让视图对触发做出合适的响应。按下按钮，包装后的视图的透明性就会降低，这样底衬的颜色就会显示出来，使视图颜色变暗或者着色。
底衬的出现是因为向视图层次结构添加了一个视图，如果使用不正确的话，这有时候会导致不必要的认为视觉效果，例如，
如果包装了的视图的背景颜色不是很明确的设置成一个不透明的颜色。
直接包装在所需控件外边即可。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/touchable-highlight.html)
```
renderButton: function() {
  return (
    <TouchableHighlight onPress={this._onPressButton}>
      <Image
        style={styles.button}
        source={require('image!myButton')}
      />
    </TouchableHighlight>
  );
},
```
######TouchableOpacity
一个包装器是为了让视图对触发做出合适的响应。按下按钮，包装后的视图的透明性就会降低，变暗。这个动作的完成实际上并没有改变视图的层次，
一般来说很容易添加到一个应用程序，并且不会产生奇怪的副作用。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/touchable-opacity.html)
```
renderButton: function() {
  return (
    <TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={styles.button}
        source={require('image!myButton')}
      />
    </TouchableOpacity>
  );
},
```
######TouchableWithoutFeedback
除非你有一个很好的理由，否则不要使用它。所有按下动作的相应元素在被触发时都应该有一个视觉反馈。一个“Web”应用程序并不感觉很“原生”，
这是主要原因之一。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/touchable-without-feedback.html)

####ProgressBarAndroid
React 组建包裹了只是 Android 部分的 ProgressBar。这个组件是被用来提示这个应用正在加载或者在应用里面有一些操作。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/ProgressBarAndroid.html)
```
styleAttr 样式属性 进度条的样式，包括：
Horizontal
Small
Large
Inverse
SmallInverse
LargeInverse
```

####滚动视图
组件封装了滚动视图平台，同时提供了与锁定“应答”系统的触摸的集成.尚不支持其他来自阻止滚动视图成为响应者的包含的响应。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/scroll-view.html)

####SwitchAndroid
标准的 Android 双态切换组件
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/SwitchAndroid.html)

####文本
用于显示文本的响应组件，支持嵌套、样式和触发处理。在接下来的例子中，嵌套的标题和正文文本将从 styles.baseText 继承 FontFamily，
但是标题会提供它自己其他的设计风格。标题和正文在文字换行时会堆叠在彼此之上。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/text.html)

####文本输入
通过键盘将文本输入到应用程序的一个基本的组件。属性提供几个功能的可配置性，比如自动校正，自动还原，占位符文本，和不同的键盘类型，
如数字键盘。 最简单的一个用例是放置一个 TextInput，利用 onChangeText 事件来读取用户的输入。还有其他的事件可以使用，
比如onSubmitEditing 和 onFocus。一个简单的例子：
```
<View>
  <TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(text) => this.setState({input: text})}
  />
  <Text>{'user input: ' + this.state.input}</Text>
</View>
```
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/text-input.html)

####ToolbarAndroid
React 组件，包装了 Android Toolbar 小工具。工具栏可以显示一个标志，导航图标（如汉堡包菜单），标题和副标题和操作列表。
标题和子标题被扩展这样以来标志和导航图标显示在左边，标题和副标题在中间并且操作在右边。如果工具栏具有唯一子级，它将显示在标题和操作之间。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/ToolbarAndroid.html)

####视图
创建 UI 最基本的组件，view 是一个容器，它支持 flexbox 布局、风格、一些触发处理，和可访问性控制，它被设计成嵌套在其他视图里，
并且有 0 到很多个任意类型的孩子。view 直接映射到原生视图，相当于在任意正在运行的平台上的响应，不管它是 UIView，<div>，android.view，等等。
这个例子创建了一个视图，将两个颜色的框和自定义的组件打包填充成一行。
```
<View style={{flexDirection: 'row', height: 100, padding: 20}}>
  <View style={{backgroundColor: 'blue', flex: 0.3}} />
  <View style={{backgroundColor: 'red', flex: 0.5}} />
  <MyCustomComponent {...customProps} />
</View>
```
为了清晰和性能，视图被设计成与样式表一起使用，尽管是内联样式也同样支持。
[极客学院Api](http://wiki.jikexueyuan.com/project/react-native/view.html)


####Navigator
