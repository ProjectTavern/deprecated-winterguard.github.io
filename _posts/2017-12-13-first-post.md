---
layout: post
---
## 지킬을 활용한 블로그 만들기 첫번째 포스트
지킬을 활용한 블로그를 만들고 있는 중입니다.
{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}