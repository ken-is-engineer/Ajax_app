class PostsController < ApplicationController
  def indexdayoday
    @posts = Post.all.order(id: "DESC")
  end

  def addtweet
    Post.create(content: params[:content])
    redirect_to action: :index
  end
end
