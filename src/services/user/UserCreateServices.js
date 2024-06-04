const UserCreateServices = async (request, DataModel) => {
     try {
          const PostBody = Request.body;
          const data = await DataModel.create(PostBody);
          return { status: 'success', data };
     } catch (error) {
          return { status: 'fail', data: error.toString() };
     }
};

module.exports = UserCreateServices;
