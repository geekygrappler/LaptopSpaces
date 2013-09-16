require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get example" do
    get :example
    assert_response :success
  end

  test "should get thankyou" do
    get :thankyou
    assert_response :success
  end

end
