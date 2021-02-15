Rails.application.routes.draw do
root to: 'posts#indexdayoday'
post 'posts', to: 'posts#addtweet'
get 'posts/:id', to: 'posts#checked'
end
