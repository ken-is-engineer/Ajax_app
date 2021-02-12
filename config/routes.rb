Rails.application.routes.draw do
get 'posts', to: 'posts#indexdayoday'
post 'posts', to: 'posts#addtweet'

get 'posts/new', to: 'posts#newtweet'
end
