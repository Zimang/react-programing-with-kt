function instantExecutionProblems() {
    return [
        {
            "trace": [{
                "kind": "Field",
                "name": "$rootProject",
                "declaringType": "org.gradle.gradlebuild.buildquality.VerifyBuildEnvironmentPlugin$validateForAllCompileTasks$verifyBuildEnvironment$1"
            }, {
                "kind": "Bean",
                "type": "org.gradle.gradlebuild.buildquality.VerifyBuildEnvironmentPlugin$validateForAllCompileTasks$verifyBuildEnvironment$1"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.gradle.gradlebuild.buildquality.VerifyBuildEnvironmentPlugin$validateForAllCompileTasks$verifyBuildEnvironment$1$1"
            }, {
                "kind": "Bean",
                "type": "org.gradle.gradlebuild.buildquality.VerifyBuildEnvironmentPlugin$validateForAllCompileTasks$verifyBuildEnvironment$1$1"
            }, {
                "kind": "Field",
                "name": "action",
                "declaringType": "org.gradle.api.internal.AbstractTask$TaskActionWrapper"
            }, {"kind": "Bean", "type": "org.gradle.api.internal.AbstractTask$TaskActionWrapper"}, {
                "kind": "Field",
                "name": "actions",
                "declaringType": "org.gradle.api.DefaultTask"
            }, {"kind": "Task", "path": ":verifyBuildEnvironment", "type": "org.gradle.api.DefaultTask"}],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":instantExecution:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":kotlinCompilerEmbeddable:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "InputProperty",
                "name": "rootSpec$1",
                "task": ":kotlinCompilerEmbeddable:unpackPatchedKotlinCompilerEmbeddable"
            }, {
                "kind": "Task",
                "path": ":kotlinCompilerEmbeddable:unpackPatchedKotlinCompilerEmbeddable",
                "type": "org.gradle.api.tasks.Sync"
            }],
            "message": [{"text": "error writing value of type "}, {"name": "org.gradle.api.internal.file.CompositeFileTree$3"}],
            "error": "java.lang.UnsupportedOperationException\n\tat org.gradle.instantexecution.serialization.codecs.FileTreeCodec$FileTreeVisitor.visitGenericFileTree(FileTreeCodec.kt:65)\n\tat org.gradle.instantexecution.serialization.codecs.FileTreeCodec$FileTreeVisitor.visitGenericFileTree(FileTreeCodec.kt:58)\n\tat org.gradle.api.internal.file.AbstractFileTree.visitLeafCollections(AbstractFileTree.java:176)\n\tat org.gradle.api.internal.file.CompositeFileCollection.visitLeafCollections(CompositeFileCollection.java:205)\n\tat org.gradle.instantexecution.serialization.codecs.FileTreeCodec.fileTreeRootsOf(FileTreeCodec.kt:53)\n\tat org.gradle.instantexecution.serialization.codecs.FileTreeCodec.encode(FileTreeCodec.kt:40)\n\tat org.gradle.instantexecution.serialization.codecs.FileTreeCodec.encode(FileTreeCodec.kt:34)\n\tat org.gradle.instantexecution.serialization.codecs.Codecs$computeEncoding$2$1.invoke(Codecs.kt:159)\n\tat org.gradle.instantexecution.serialization.codecs.Codecs$computeEncoding$2$1.invoke(Codecs.kt:61)\n\tat org.gradle.instantexecution.serialization.beans.BeanPropertyWriterKt.writeNextProperty(BeanPropertyWriter.kt:92)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodecKt$writeRegisteredPropertiesOf$$inlined$run$lambda$1.invoke(TaskGraphCodec.kt:152)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodecKt$writeRegisteredPropertiesOf$$inlined$run$lambda$2.invoke(TaskGraphCodec.kt:156)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodecKt$writeRegisteredPropertiesOf$$inlined$run$lambda$4.visitInputFileProperty(TaskGraphCodec.kt:173)\n\tat org.gradle.api.internal.tasks.DefaultTaskInputs.visitRegisteredProperties(DefaultTaskInputs.java:77)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodecKt.writeRegisteredPropertiesOf(TaskGraphCodec.kt:162)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodecKt.access$writeRegisteredPropertiesOf(TaskGraphCodec.kt:1)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodec.writeTask(TaskGraphCodec.kt:104)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodec.access$writeTask(TaskGraphCodec.kt:57)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodec$writeTaskGraphOf$1$1.run(TaskGraphCodec.kt:63)\n\tat org.gradle.internal.Factories$1.create(Factories.java:26)\n\tat org.gradle.internal.work.DefaultWorkerLeaseService.withLocks(DefaultWorkerLeaseService.java:189)\n\tat org.gradle.internal.work.StopShieldingWorkerLeaseService.withLocks(StopShieldingWorkerLeaseService.java:40)\n\tat org.gradle.api.internal.project.DefaultProjectStateRegistry$ProjectStateImpl.withProjectLock(DefaultProjectStateRegistry.java:227)\n\tat org.gradle.api.internal.project.DefaultProjectStateRegistry$ProjectStateImpl.withMutableState(DefaultProjectStateRegistry.java:221)\n\tat org.gradle.api.internal.project.DefaultProjectStateRegistry$ProjectStateImpl.withMutableState(DefaultProjectStateRegistry.java:187)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodec$writeTaskGraphOf$1.invoke(TaskGraphCodec.kt:62)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodec$writeTaskGraphOf$1.invoke(TaskGraphCodec.kt:57)\n\tat org.gradle.instantexecution.serialization.CombinatorsKt.writeCollection(Combinators.kt:196)\n\tat org.gradle.instantexecution.serialization.codecs.TaskGraphCodec.writeTaskGraphOf(TaskGraphCodec.kt:60)\n\tat org.gradle.instantexecution.DefaultInstantExecution$saveTaskGraph$1.invoke(DefaultInstantExecution.kt:127)\n\tat org.gradle.instantexecution.DefaultInstantExecution$saveTaskGraph$1.invoke(DefaultInstantExecution.kt:63)\n\tat org.gradle.instantexecution.InstantExecutionBuildOperationsKt$withOperation$1.run(InstantExecutionBuildOperations.kt:43)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor$RunnableBuildOperationWorker.execute(DefaultBuildOperationExecutor.java:402)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor$RunnableBuildOperationWorker.execute(DefaultBuildOperationExecutor.java:394)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor$1.execute(DefaultBuildOperationExecutor.java:165)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor.execute(DefaultBuildOperationExecutor.java:250)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor.execute(DefaultBuildOperationExecutor.java:158)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor.run(DefaultBuildOperationExecutor.java:92)\n\tat org.gradle.internal.operations.DelegatingBuildOperationExecutor.run(DelegatingBuildOperationExecutor.java:31)\n\tat org.gradle.instantexecution.InstantExecutionBuildOperationsKt.withOperation(InstantExecutionBuildOperations.kt:37)\n\tat org.gradle.instantexecution.InstantExecutionBuildOperationsKt.withStoreOperation(InstantExecutionBuildOperations.kt:32)\n\tat org.gradle.instantexecution.DefaultInstantExecution.saveTaskGraph(DefaultInstantExecution.kt:110)\n\tat org.gradle.initialization.DefaultGradleLauncher.doClassicBuildStages(DefaultGradleLauncher.java:146)\n\tat org.gradle.initialization.DefaultGradleLauncher.doBuildStages(DefaultGradleLauncher.java:126)\n\tat org.gradle.initialization.DefaultGradleLauncher.executeTasks(DefaultGradleLauncher.java:106)\n\tat org.gradle.internal.invocation.GradleBuildController$1.execute(GradleBuildController.java:60)\n\tat org.gradle.internal.invocation.GradleBuildController$1.execute(GradleBuildController.java:57)\n\tat org.gradle.internal.invocation.GradleBuildController$3.create(GradleBuildController.java:85)\n\tat org.gradle.internal.invocation.GradleBuildController$3.create(GradleBuildController.java:78)\n\tat org.gradle.internal.work.DefaultWorkerLeaseService.withLocks(DefaultWorkerLeaseService.java:189)\n\tat org.gradle.internal.work.StopShieldingWorkerLeaseService.withLocks(StopShieldingWorkerLeaseService.java:40)\n\tat org.gradle.internal.invocation.GradleBuildController.doBuild(GradleBuildController.java:78)\n\tat org.gradle.internal.invocation.GradleBuildController.run(GradleBuildController.java:57)\n\tat org.gradle.tooling.internal.provider.ExecuteBuildActionRunner.run(ExecuteBuildActionRunner.java:31)\n\tat org.gradle.launcher.exec.ChainingBuildActionRunner.run(ChainingBuildActionRunner.java:35)\n\tat org.gradle.launcher.exec.BuildOutcomeReportingBuildActionRunner.run(BuildOutcomeReportingBuildActionRunner.java:58)\n\tat org.gradle.tooling.internal.provider.ValidatingBuildActionRunner.run(ValidatingBuildActionRunner.java:32)\n\tat org.gradle.launcher.exec.BuildCompletionNotifyingBuildActionRunner.run(BuildCompletionNotifyingBuildActionRunner.java:39)\n\tat org.gradle.launcher.exec.RunAsBuildOperationBuildActionRunner$3.call(RunAsBuildOperationBuildActionRunner.java:51)\n\tat org.gradle.launcher.exec.RunAsBuildOperationBuildActionRunner$3.call(RunAsBuildOperationBuildActionRunner.java:45)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor$CallableBuildOperationWorker.execute(DefaultBuildOperationExecutor.java:416)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor$CallableBuildOperationWorker.execute(DefaultBuildOperationExecutor.java:406)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor$1.execute(DefaultBuildOperationExecutor.java:165)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor.execute(DefaultBuildOperationExecutor.java:250)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor.execute(DefaultBuildOperationExecutor.java:158)\n\tat org.gradle.internal.operations.DefaultBuildOperationExecutor.call(DefaultBuildOperationExecutor.java:102)\n\tat org.gradle.internal.operations.DelegatingBuildOperationExecutor.call(DelegatingBuildOperationExecutor.java:36)\n\tat org.gradle.launcher.exec.RunAsBuildOperationBuildActionRunner.run(RunAsBuildOperationBuildActionRunner.java:45)\n\tat org.gradle.launcher.exec.InProcessBuildActionExecuter$1.transform(InProcessBuildActionExecuter.java:50)\n\tat org.gradle.launcher.exec.InProcessBuildActionExecuter$1.transform(InProcessBuildActionExecuter.java:47)\n\tat org.gradle.composite.internal.DefaultRootBuildState.run(DefaultRootBuildState.java:78)\n\tat org.gradle.launcher.exec.InProcessBuildActionExecuter.execute(InProcessBuildActionExecuter.java:47)\n\tat org.gradle.launcher.exec.InProcessBuildActionExecuter.execute(InProcessBuildActionExecuter.java:31)\n\tat org.gradle.launcher.exec.BuildTreeScopeBuildActionExecuter.execute(BuildTreeScopeBuildActionExecuter.java:42)\n\tat org.gradle.launcher.exec.BuildTreeScopeBuildActionExecuter.execute(BuildTreeScopeBuildActionExecuter.java:28)\n\tat org.gradle.tooling.internal.provider.ContinuousBuildActionExecuter.execute(ContinuousBuildActionExecuter.java:78)\n\tat org.gradle.tooling.internal.provider.ContinuousBuildActionExecuter.execute(ContinuousBuildActionExecuter.java:52)\n\tat org.gradle.tooling.internal.provider.SubscribableBuildActionExecuter.execute(SubscribableBuildActionExecuter.java:59)\n\tat org.gradle.tooling.internal.provider.SubscribableBuildActionExecuter.execute(SubscribableBuildActionExecuter.java:36)\n\tat org.gradle.tooling.internal.provider.SessionScopeBuildActionExecuter.execute(SessionScopeBuildActionExecuter.java:68)\n\tat org.gradle.tooling.internal.provider.SessionScopeBuildActionExecuter.execute(SessionScopeBuildActionExecuter.java:38)\n\tat org.gradle.tooling.internal.provider.GradleThreadBuildActionExecuter.execute(GradleThreadBuildActionExecuter.java:37)\n\tat org.gradle.tooling.internal.provider.GradleThreadBuildActionExecuter.execute(GradleThreadBuildActionExecuter.java:26)\n\tat org.gradle.tooling.internal.provider.ParallelismConfigurationBuildActionExecuter.execute(ParallelismConfigurationBuildActionExecuter.java:43)\n\tat org.gradle.tooling.internal.provider.ParallelismConfigurationBuildActionExecuter.execute(ParallelismConfigurationBuildActionExecuter.java:29)\n\tat org.gradle.tooling.internal.provider.StartParamsValidatingActionExecuter.execute(StartParamsValidatingActionExecuter.java:60)\n\tat org.gradle.tooling.internal.provider.StartParamsValidatingActionExecuter.execute(StartParamsValidatingActionExecuter.java:32)\n\tat org.gradle.tooling.internal.provider.SessionFailureReportingActionExecuter.execute(SessionFailureReportingActionExecuter.java:55)\n\tat org.gradle.tooling.internal.provider.SessionFailureReportingActionExecuter.execute(SessionFailureReportingActionExecuter.java:41)\n\tat org.gradle.tooling.internal.provider.SetupLoggingActionExecuter.execute(SetupLoggingActionExecuter.java:48)\n\tat org.gradle.tooling.internal.provider.SetupLoggingActionExecuter.execute(SetupLoggingActionExecuter.java:32)\n\tat org.gradle.launcher.daemon.server.exec.ExecuteBuild.doBuild(ExecuteBuild.java:68)\n\tat org.gradle.launcher.daemon.server.exec.BuildCommandOnly.execute(BuildCommandOnly.java:37)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:104)\n\tat org.gradle.launcher.daemon.server.exec.WatchForDisconnection.execute(WatchForDisconnection.java:39)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:104)\n\tat org.gradle.launcher.daemon.server.exec.ResetDeprecationLogger.execute(ResetDeprecationLogger.java:27)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:104)\n\tat org.gradle.launcher.daemon.server.exec.RequestStopIfSingleUsedDaemon.execute(RequestStopIfSingleUsedDaemon.java:35)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:104)\n\tat org.gradle.launcher.daemon.server.exec.ForwardClientInput$2.call(ForwardClientInput.java:78)\n\tat org.gradle.launcher.daemon.server.exec.ForwardClientInput$2.call(ForwardClientInput.java:75)\n\tat org.gradle.util.Swapper.swap(Swapper.java:38)\n\tat org.gradle.launcher.daemon.server.exec.ForwardClientInput.execute(ForwardClientInput.java:75)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:104)\n\tat org.gradle.launcher.daemon.server.exec.LogAndCheckHealth.execute(LogAndCheckHealth.java:55)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:104)\n\tat org.gradle.launcher.daemon.server.exec.LogToClient.doBuild(LogToClient.java:63)\n\tat org.gradle.launcher.daemon.server.exec.BuildCommandOnly.execute(BuildCommandOnly.java:37)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:104)\n\tat org.gradle.launcher.daemon.server.exec.EstablishBuildEnvironment.doBuild(EstablishBuildEnvironment.java:82)\n\tat org.gradle.launcher.daemon.server.exec.BuildCommandOnly.execute(BuildCommandOnly.java:37)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:104)\n\tat org.gradle.launcher.daemon.server.exec.StartBuildOrRespondWithBusy$1.run(StartBuildOrRespondWithBusy.java:52)\n\tat org.gradle.launcher.daemon.server.DaemonStateCoordinator$1.run(DaemonStateCoordinator.java:297)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\n"
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "jarTask",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.InspectClassesForMultiModuleIC"
            }, {
                "kind": "Task",
                "path": ":kotlinCompilerEmbeddable:inspectClassesForKotlinIC",
                "type": "org.jetbrains.kotlin.gradle.tasks.InspectClassesForMultiModuleIC"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.tasks.bundling.Jar"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Task"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":kotlinDslToolingModels:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "jarTask",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.InspectClassesForMultiModuleIC"
            }, {
                "kind": "Task",
                "path": ":kotlinDslToolingModels:inspectClassesForKotlinIC",
                "type": "org.jetbrains.kotlin.gradle.tasks.InspectClassesForMultiModuleIC"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.tasks.bundling.Jar"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Task"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":kotlinDsl:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":kotlinDslIntegTests:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "jarTask",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.InspectClassesForMultiModuleIC"
            }, {
                "kind": "Task",
                "path": ":kotlinDsl:inspectClassesForKotlinIC",
                "type": "org.jetbrains.kotlin.gradle.tasks.InspectClassesForMultiModuleIC"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.tasks.bundling.Jar"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Task"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":kotlinDslPlugins:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":kotlinDslProviderPlugins:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":kotlinDslToolingBuilders:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "jarTask",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.InspectClassesForMultiModuleIC"
            }, {
                "kind": "Task",
                "path": ":kotlinDslToolingBuilders:inspectClassesForKotlinIC",
                "type": "org.jetbrains.kotlin.gradle.tasks.InspectClassesForMultiModuleIC"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.tasks.bundling.Jar"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Task"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":kotlinDslTestFixtures:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
        {
            "trace": [{
                "kind": "Field",
                "name": "project",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet"
            }, {
                "kind": "Field",
                "name": "this$0",
                "declaringType": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Bean",
                "type": "org.jetbrains.kotlin.gradle.plugin.sources.DefaultKotlinSourceSet$customSourceFilesExtensions$$inlined$Iterable$1"
            }, {
                "kind": "Field",
                "name": "sourceFilesExtensionsSources",
                "declaringType": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }, {
                "kind": "Task",
                "path": ":soak:compileKotlin",
                "type": "org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
            }],
            "message": [{"text": "cannot serialize object of type "}, {"name": "org.gradle.api.internal.project.DefaultProject"}, {"text": ", a subtype of "}, {"name": "org.gradle.api.Project"}, {"text": ", as these are not supported with instant execution."}],
            "error": null
        },
    ];
}
