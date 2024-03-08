const UserProfile = ({ user, orderHistory, savedItems }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Picture */}
        <div className="flex items-center justify-center bg-gray-200 h-40">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="h-32 w-32 rounded-full object-cover"
          />
        </div>
        {/* User Info */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold">{user.username}</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>
        {/* Stats */}
        <div className="bg-gray-100 p-6 flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Orders</h3>
            <p className="text-gray-600">{orderHistory.length}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Saved Items</h3>
            <p className="text-gray-600">{savedItems.length}</p>
          </div>
        </div>
        {/* Order History */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Order History</h3>
          <ul className="space-y-4">
            {orderHistory.map((order) => (
              <li key={order.id} className="flex items-center justify-between">
                <span>{order.date}</span>
                <span>${order.total}</span>
                <span>{order.status}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Saved Items */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Saved Items</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {savedItems.map((item) => (
              <div key={item.id} className="bg-gray-100 p-4 rounded-lg">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-24 object-cover mb-2"
                />
                <p className="text-sm text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
