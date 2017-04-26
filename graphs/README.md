NOTE: In order to create the stripped graphs (specifically for our compiled TensorFlow which doesn't have all ops), we use the transform graph tool (see documentation https://github.com/tensorflow/tensorflow/tree/master/tensorflow/tools/graph_transforms#optimizing-for-deployment):


bazel-bin/tensorflow/tools/graph_transforms/transform_graph \
--in_graph=tensorflow/contrib/makefile_js/js_working_directory/mnist.pb \
--out_graph=tensorflow/contrib/makefile_js/js_working_directory/mnist.stripped.pb \
--inputs="Reshape:0","dropout:0" \
--outputs="prediction_onehot:0" \
--transforms="strip_unused_nodes(name=Reshape, type_for_name=float, shape_for_name=\"1,28,28,1\", name=dropout, type_for_name=float, shape_for_name=\"1\")"


bazel-bin/tensorflow/tools/graph_transforms/transform_graph \
--in_graph=tensorflow/contrib/makefile_js/js_working_directory/inception.pb \
--out_graph=tensorflow/contrib/makefile_js/js_working_directory/inception.stripped.pb \
--inputs="Mul:0" \
--outputs="softmax:0" \
--transforms="\
strip_unused_nodes(type=float, shape=\"1,299,299,3\") \
remove_nodes(op=Identity, op=CheckNumerics) \
fold_constants(ignore_errors=true) \
fold_batch_norms \
fold_old_batch_norms\
"
