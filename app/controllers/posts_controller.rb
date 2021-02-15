class PostsController < ApplicationController
  def indexdayoday
    @posts = Post.all.order(id: "DESC")
  end

  def addtweet
    Post.create(content: params[:content])
    redirect_to action: :index
  end

  def checked
    post = Post.find(params[:id])
    if post.checked 
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end
end
