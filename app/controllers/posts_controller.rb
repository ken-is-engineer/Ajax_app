class PostsController < ApplicationController
  def indexdayoday
    @post = Post.find(2)
    @posts = Post.all
  end

  def addtweet
    Post.create(content: params[:content])
  end

  def newtweet
    
  end
end
