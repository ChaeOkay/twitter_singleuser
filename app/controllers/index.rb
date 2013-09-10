get '/' do
  erb :index
end

post '/tweet' do
  puts params
  @msg = params['message']
  erb :_confirm
end
