Rails.application.routes.draw do
root to: 'posts#indexdayoday'
post 'posts', to: 'posts#addtweet'

end
