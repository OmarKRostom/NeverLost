@extends('layout')

@section('content')
	<h1>
		Sites
		<small>Manage your site passwords</small>
	</h1>
	<div class="col-xs-12">
		<a href="/dashboard/sites/new" class="col-xs-3 widget">
			{{-- This is the main widget, don't remove --}}
				<center><i style="font-size:24px;margin-top: 50px;color:#353535;" class="fa fa-plus"></i></center>
				<p style="font-size:24px;text-align: center;color:#353535;">Add site</p>
		</a>

		<div v-for="(site, index) in sites">
			<a v-bind:href="'/dashboard/sites/modify/' + index" class="col-xs-3 widget">
				<p style="font-size:18px;text-align: center;color:#353535;margin-top: 25px;">@{{ site.username }}</p>
				<p style="font-size:18px;text-align: center;color:#353535;">@{{ site.password }}</p>
				<p style="font-size:18px;text-align: center;color:#353535;">@{{ site.provider }}</p>
			</a>
		</div>
	</div>
@endsection